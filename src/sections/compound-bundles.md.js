export default `
## Bundles

A collection of multiple relationships between two specific nodes. These can both be atomic or aggregate nodes, or a mix.

* **Between atomic nodes** This could be an actress who also produced the movie she was in, thus establishing both an ACTED_IN and a PRODUCED relationship between the actress node and the movie node.
* **Between aggregated nodes** In this case a bundle would represent a group of relationships between two aggregate nodes, regardless of their type. For example, one aggregate node groups all ACTRESS nodes and one all ACTOR nodes. In between these two groups different (types) of relationships can exist, from professional types of relationships such as CO_WORKED to personal relationship types such as ROMANTICALLY_INVOVED or FAMILIAL.

Line appearance for a bundle of relationships:
* In a large scale graph (hem scale 5 and larger): **a line for each of the *types* of relationships between the two nodes**
  * Note: Even though there could be multiple CO_WORKED relationships between between two aggregate nodes, in the bundle they would only be represented by 1 line
* In a medium scale graph (hem scale 3 and 1): **double stroke** (with transparency in between them)
* In a small scale graph (below hem scale 1): **default (1-stroke) line**

  ![Compound paths expanded](${require('../images/compound-bundles-1.png')})

For the small to large scale graphs (above 0.5 hem): Use an arrowhead if all the relationships (represented by a single line) point in the same direction, otherwise use the “no arrowhead” undirected version. For very small scale graphs, use the small scale default: do not display an arrowhead.
`;
