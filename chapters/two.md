# Nested in Sidebar

The sidebar is quite flexibel too, nesting elements in the SUMMARY.md file reflects the structure of the sidebar. 


```fsharp
open Fable.Parsimmon 

QUnit.test "Parsing list of numbers works" <| fun test ->
    let comma = Parsimmon.str ","

    let commaSeperatedNumbers = 
        Parsimmon.digit
        |> Parsimmon.many
        |> Parsimmon.concat
        |> Parsimmon.map int
        |> Parsimmon.seperateBy comma

    let leftBracket = Parsimmon.str "["
    let rightBracket = Parsimmon.str "]"

    commaSeperatedNumbers
    |> Parsimmon.between leftBracket rightBracket
    |> Parsimmon.parse "[5,10,15,20,25]"
    |> function
        | Some [| 5; 10; 15; 20; 25 |] -> test.pass()
        | otherwise -> test.fail()
```