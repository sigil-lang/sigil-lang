export default `
## Clusters

A collection of nodes and relationships grouped by structure into neighborhoods. Groups of nodes that are highly interconnected, and less connected to other nodes, can be grouped into a cluster. This might happen if we look at the cast of the Harry Potter movies, who have worked together for 8 movies, but most have not worked on many other movies. Therefore, the cast of Harry Potter will be heavily interconnected and could be combined into a cluster (and collapsed to look like a cluster node).

Appearance of a cluster:
* Expanded, individual node and relationships can be viewed. Representation of cluster membership varies with scale:
  * At very large scale (hem scale above hem scale 7): you are so far zoomed in that you are looking only/inside of the cluster. There is no need for a visual distinction of the cluster itself anymore.
  * At medium & large scale (hem scale between 3 and 5): combines the visual appearance of aggregate nodes and sections: Has a double stroke running around all cluster member nodes (with transparency in between the two strokes)
  * At small scale (below hem scale 1): node fill color is preferred for identifying cluster membership

  ![Clusters at different scales](${require('../images/compound-clusters-1.png')})

* Collapsed, appears as a single node. Visually the same as the representation of an aggregate node
  * Note however aggregate nodes are distinct from collapsed cluster nodes. Aggregate nodes are only useful in its collapsed state. The expanded state has no extra meaning, it’s just the normal nodes and relationships, whereas an expanded cluster node (into its underlying nodes and relationships) would still be seen as a structural cluster.

`;
