export default `
### Paths
A collection of nodes and relationships, in a continuous node-relationship-node pattern.

Line appearance for paths:
* Collapsed: A relationship that represents a single collapsed path between two nodes (a single line, represents many underlying relationships and nodes): **solid line + 3 dots in center** (no matter the number of underlying collapsed nodes and relationships)
  * For relationships between nodes in the middle of the path, i.e. not the start- and endpoint, and any nodes outside of the path, will not be drawn in the collapsed state. As if the middle nodes have been taken out of the graph.

  ![Compound paths collapsed](${require('../images/compound-paths-1.png')})

* Expanded: Denoted by a transparent grey envelope around the nodes and relationships along the path

  ![Compound paths expanded](${require('../images/compound-paths-2.png')})
`;
