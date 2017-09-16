export default `

## Node

A single data record, with 0 or more labels, and 0 or more properties.  Labels are a special type of property that groups the node. For example, a node can be a single data record with property name=“Emma Watson” and labels “Actress” and “British”. Another node can be a single data record with property title=“Beauty and the Beast” and label “Movie”.

A node should be represented by a **circle**. The default node has a light grey fill and a slightly darker grey stroke. We can add the following visual encodings to highlight specific node traits:

* Fill color: Although the default color is light grey, it can also be chosen by the user to denote some value or category, though the effectiveness depends on the scale.
  * At large scale (above 1 hem): use either category or (property) value-based coloring
  * At small scale (below 1 hem): only use neighbourhood, i.e. cluster-based, coloring, so that large groups of a graph that are visually closely connected, all get the same color.
  ![Atomic node fill color at small and large scale](${require('../images/atom-node-1.png')})
    * Using different colors throughout the graph when there are many (small) nodes will result in a visual rainbow confetti and therefore category/value based clustering will not be useful anymore

`;
