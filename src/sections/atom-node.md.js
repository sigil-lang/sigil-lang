export default `

## Node

A single data record, with 0 or more labels, and 0 or more properties.  Labels are a special type of property that groups the node. For example, a node can be a single data record with property name=“Emma Watson” and labels “Actress” and “British”. Another node can be a single data record with property title=“Beauty and the Beast” and label “Movie”.

A node should be represented by a **circle**. The default node has a light grey fill and a slightly darker grey stroke. We can add the following visual encodings to highlight specific node traits:

* Fill color: Although the default color is light grey, it can also be chosen by the user to denote some value or category, though the effectiveness depends on the scale.
  * At large scale (above 1 hem): use either category or (property) value-based coloring
  * At small scale (below 1 hem): only use neighbourhood, i.e. cluster-based, coloring, so that large groups of a graph that are visually closely connected, all get the same color.
  ![Atomic node fill color at small and large scale](${require('../images/atom-node-1.png')})
    * Using different colors throughout the graph when there are many (small) nodes will result in a visual rainbow confetti and therefore category/value based clustering will not be useful anymore

* Stroke color:
  * At large scale (above 3 hem): Should be slightly different from the fill color; slightly darker for light fill colors or slightly lighter for dark fill colors
  * At small scale (below 1 hem): Don’t use a separate stroke, just the fill color
  ![Atomic node stroke color at small and large scale](${require('../images/atom-node-2.png')})

* Stroke style (note: stroke is only used in larger scale graphs where the nodes are big enough to have strokes at all):
  <img src=${require('../images/atom-node-3.png')} alt='Atomic node stroke style with or without properties' width=300px />
  * 0 properties: dashed
  * 1 or more properties: solid

`;
