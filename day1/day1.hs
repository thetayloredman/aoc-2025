-- Copyright (C) 2025 Logan "LogN" Devine <logan@zirco.dev>
-- Advent of Code 2025 - Day 1, Part 1 - Haskell version
-- This software is licensed under the MIT License. See the LICENSE file for details.

-- input :: String
-- input = "L68\nL30\nR48\nL5\nR60\nL55\nL1\nL99\nR14\nL82"

calculateTurns :: [String] -> [Int]
calculateTurns [] = []
calculateTurns (x:xs) = [calc x] ++ calculateTurns xs
  where
    calc ('L':val) = - (read val)
    calc ('R':val) = read val
    
runPart1 :: [Int] -> Int
runPart1 input = go 50 0 input
  where
    go _ ans [] = ans
    go curr ans (val:vals) =
      let pos' = (curr + val) `mod` 100
          ans' = if pos' == 0 then ans+1 else ans
      in  go pos' ans' vals

main :: IO ()
main = do
    input <- readFile "input.txt"
    print $ runPart1 $ calculateTurns (lines input)
