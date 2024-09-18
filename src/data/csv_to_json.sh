#!/bin/bash

# Check if the input file is provided
if [ -z "$1" ]; then
  echo "Usage: $0 input.csv"
  exit 1
fi

# Check if the input file exists
if [ ! -f "$1" ]; then
  echo "File not found!"
  exit 1
fi

# Get filename without extension
filename=$(basename -- "$1")
filename="${filename%.*}"

# Convert CSV to JSON and rename specific columns using csvkit and jq
csvjson "$1" | jq '.[] | {
  "capacityKwp": ."Capacity (Kwp)",
  "batteryCapacityKwhr": ."Battery Capacity (Kwhr)",
  "costBeforeGrant": ."Cost (Before Grant)",
  "grant": .Grant,
  "costAfterGrant": ."Cost After Grant",
  "costPerKWp": ."Cost/KWp",
  "orientation": .Orientation,
  "roofSlopeDegrees": ."Roof Slope (degrees)",
  "location": .Location,
  "installed": .Installed,
  "comment": .Comment,
  "prePvBer": ." Pre-PV BER",
  "postPvBer": ." Post-PV BER",
  "inverter": ." Inverter",
  "panels": .Panels,
  "installer": ." Installer",
  "meterInUse": ."Meter in Use",
  "providerPackage": ."Provider / Package"
}' > "$filename.json"

echo "Conversion complete. JSON file is saved as $filename.json"
