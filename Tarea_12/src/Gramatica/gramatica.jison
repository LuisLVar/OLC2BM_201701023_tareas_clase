 %{
    const { Aritmetica, tipoOperacion } = require('../Expresiones/Aritmetica');
    const { Factor } = require('../Expresiones/Factor')
%}

%lex
%options case-insensitive
entero  [0-9]+
number {entero}("."{entero})?
%%
\s+                   /* skip whitespace */

{number}                return 'NUMBER'
"+"                     return 'MAS';
"-"                     return 'MENOS';
"*"                     return 'POR';
"/"                     return 'DIV';
"("                     return 'PARIZQ';
")"                     return 'PARDER';

([a-zA-Z_])[a-zA-Z0-9_ñÑ]*	return 'ID';
<<EOF>>		            return 'EOF'


/lex


%start Init

%%

Init    
    : E EOF 
    {
        return $1;
    } 
;

E
    : E MAS T 
    {
        $$ = new Aritmetica($1, $3, tipoOperacion.MAS, @1.first_line,@1.first_column);
    }
    | E MENOS T
    {
        $$ = new Aritmetica($1, $3, tipoOperacion.MENOS, @1.first_line,@1.first_column);
    }
    | T
    {
        $$ = $1;
    }
;

T
    : T POR F 
    {
        $$ = new Aritmetica($1, $3, tipoOperacion.POR, @1.first_line,@1.first_column);
    }
    | T DIV F 
    {
        $$ = new Aritmetica($1, $3, tipoOperacion.DIV, @1.first_line,@1.first_column);
    }
    | F
    {
        $$ = $1;
    }
;


F   : '(' E ')'
    { 
        $$ = $2;
    }
    | NUMBER 
    {
        $$ = new Factor($1, @1.first_line, @1.first_column);
    }
    | ID
    {
        $$ = new Factor($1, @1.first_line, @1.first_column);
    }
;