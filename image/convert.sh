#!/bin/bash
# Panned and zoomed animation
# Mark Setchell
#
steps=40
# Final x offset from top left
finalx=1478
# Final y offset from top left
finaly=1096
# Initial & Final width
initw=1478
finalw=1478
# Initial & Final height
inith=1096
finalh=1096

# Remove anything from previous attempts
rm frame-*jpg 2> /dev/null
for i in $(seq 0 $steps); do
   ((x=finalx*i/steps))
   ((y=finaly*i/steps))
   ((w=initw-(i*(initw-finalw)/steps)))
   ((h=inith-(i*(inith-finalh)/steps)))
   echo $i,$x,$y,$w,$h
   name=$(printf "frame-%03d.jpg" $i)
   convert $1 -crop ${w}x${h}+${x}+${y} -resize 512x512 "$name"
done
convert -delay 20 frame* anim.gif
