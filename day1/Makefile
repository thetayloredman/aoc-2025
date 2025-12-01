.PHONY: run
run: all
	./part1

.PHONY: all
all: part1

part1: part1.zr
	zrc part1.zr --emit object -o part1.o
	clang part1.o -o part1 -lc