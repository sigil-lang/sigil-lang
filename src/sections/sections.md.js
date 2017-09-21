export default `
# Sections

---

A graph is composed of nodes and relationships as described above. Graphs don't have an inherent boundary, and can expand as you add more nodes and relationships. It's also possible to take two or more separate graphs and combine them into a single graph. Sections are used to denote the multiple graphs that are within the combined graph. In addition to connecting the nodes from within each graph across to other graphs, the sections themselves can have relationships.

For example, in movies there is a large organization required to make a movie, broken down by department. To make a movie requires coordination and sequencing of the work of each department. Each individual is represented by a node and there exist person to person relationships, even across departments. Emma Watson has a relationship of MAKEUP_APPLIED to one or more of the makeup artists in the makeup department.
However, each of these departments can be seen as sections in their own right. And there exist higher level relationships between departments as well. The set construction section has a relationship of PROVIDE_SET to the set dressing section. Or the film crew section that has a PROVIDE_FILM relationship to the editing section.

Note: Clusters should not cross / overlap sections, they should only appear within a section. Although theoretically it is possible for clusters to overlap regions from different sections, this is more of a semantic rule to follow.

Visual representation for sections is a **dotted envelope** around the nodes and relationships that are completely internal to the section. Relationships between the sections themselves can then be shown by a **single wavy line**.
* If a relationship between two sections can be inferred (in a similar sense as an inferred relationship between two nodes), a **dotted wavy line** can be drawn between the two section envelopes.

![Relationship between sections](${require('../images/sections-1.png')})
`;
