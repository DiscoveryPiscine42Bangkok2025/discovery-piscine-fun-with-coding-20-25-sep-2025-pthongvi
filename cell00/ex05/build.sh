#!/bin/bash
# Exercise 05: build


if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 0
fi


for arg in "$@"; do
  dir="ex$arg"  
  mkdir -p "$dir"  