# Nested in Sidebar

The sidebar is quite flexibel too, nesting elements in the SUMMARY.md file reflects the structure of the sidebar. 


```fsharp
// sum : int list -> int
let rec sum xs = 
    match xs with
    | [] -> 0
    | first :: rest -> first + sum rest
```