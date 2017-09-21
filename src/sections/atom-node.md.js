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

<img src=${require('../images/atom-node-3.png')} alt='Atomic node stroke style with or without properties' style='width:400px;float:right' />
* Stroke style (note: stroke is only used in larger scale graphs where the nodes are big enough to have strokes at all):
  * 0 properties: dashed
  * 1 or more properties: solid

* Size: Can be chosen by the user. Either a constant or set to represent a numeric value (using area scaling, not radius scaling). Small circles indicating low values and the larger the circle the higher the value it represents. For example, scaling the nodes by the number of incoming relationships, or scaling the nodes by a property of the node, such as net worth of each actor/actress.
  ![Atomic node radius vs area scaling](${require('../images/atom-node-4.png')})

* Icon inside the circle can be used for
  * Sub-categorization (when color is already used for category)
  * Indication of state (open/closed, gender, progress along a workflow)

  For advice on when icons can be properly used:

  * At large scale (above 3 hem): Icons can be displayed within the nodes.
  * At medium scale (between 2 and 3 hem): Only simple icons should be used that are easily distinguishable.
  * At small scale (below 2 hem): Don’t use an icon, they cannot be distinguished easily enough at this scale. Also, because there are a lot of nodes visible at this scale typically, any icons within the node will create a lot of visual clutter.

  In general, if you are placing an icon inside a node, make sure that the width or height of the icon inside the node is not larger than the radius of the node

* Caption for each node: The styling is up to the user. Font-sizing corresponds with the hem scale used for the graph, where 1em font ~= 1hem
  * At large scale (above 3 hem): There is enough room to give each node a proper caption
  * At medium scale (between 1 and 3 hem): Only use short captions, to make sure you don’t have overlap of captions and (other) nodes
  * At small scale (below 0.5 hem): Don’t use any caption, the text will have gotten too small. Also, because there are a lot of nodes visible at this scale typically, the captions of all the nodes will create a lot of visual clutter.

`;
