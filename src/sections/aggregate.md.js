export default `
# Aggregate Nodes
---

A group of atomic nodes aggregated together.  For example:

* **By metadata**: From a *label* perspective: nodes can be grouped by having a similar label, such as grouping all nodes together with the label of “Actress”, or “Movie”.
  * Note: Some nodes can have more than 1 label, such as the “Emma Watson” node having the labels “Actress” and “British”. If you then create an aggregate node for “Actress” and “British” separately, “Emma Watson” would belong to both aggregate nodes.

  From a *property* perspective: nodes can also be grouped by the types of properties that they have (regardless of the values of these properties). For example, nodes with an “Actress” labels may have the properties of “name”, “birthdate”, “debut year”, “net worth”, etc., whereas a “Movie” node may have “title”, “budget”, and “box office earning” properties.  All nodes that have a known budget could be grouped together potentially.

* **By property value**: Nodes can also by aggregated by the *values* they contain. For example grouping all nodes that have a release date in a certain year, all nodes that have a net worth between two values, or all nodes that have “female” in the property of “gender”.

* **By both metadata and property value**: By value and by metadata may be combined to refine the membership criteria of an aggregate. For instance, it may be interesting to group the records with “Actress” labels by their debut year, or their net worth, or both.  Similarly, it may be interesting to group the records with “Movie” labels by their box office earnings, and explore the graph that emerges.
`;
