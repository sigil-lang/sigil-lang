export default `
## Relationship

An association between exactly two Nodes, with a direction "from" one and "to" another.  It must have a type, and can have 0 or more properties. For example, there can be a relationship “from” the Emma Watson node “to” the Beauty and the Beast with type “ACTED_IN” and property character=”Belle”.

A relationship should be represented by a **line**. The default relationship has a light grey stroke with slight transparency.  We can add the following visual encodings to highlight specific relationship traits:

* Directionality:
  * At large scale(above 0.5 hem):

    <img src=${require('../images/atom-relationship-1.png')} alt='Atomic relationship arrow directionality' width=300px />
    * One-directional: arrowhead (a filled triangle) indicating the direction
    * Bi-directional (or undirected): no arrowheads
  * At small scale (below 0.5 hem): Arrowheads become too small to properly see. At this scale no longer show any arrowheads

* Line stroke:
  * Default relationship: **solid**
  * Inferred relationship (it’s not actually there in the data (an explicit relationship), but can be be inferred) We know that “Emma Watson” and “Dan Stevens” both ACTED_IN the movie “The Beauty and the Beast” so we can infer that there is a relationship of CO_WORKERS between Emma and Dan: **dotted**
  ![Atomic relationship stroke style](${require('../images/atom-relationship-2.png')})

* Line thickness:
  * At large scale (above 1 hem): relative line thickness can be useful and can be chosen by the user. Thickness then represents a numeric value, thin lines being low values and the thicker the line, the higher the value. As visual advice, don’t create lines thinner than 1px or thicker than the radius of the (smallest) node. For example, for all relationships between “Emma Watson” and the different movies she ACTED_IN, the line thickness could represent her salary in each movie.
  * At small scale (below 0.5 hem): relative line thickness becomes difficult to distinguish, when the radius of the nodes becomes close to the overall minimum of 1 pixel, and is therefore not recommended

* Line color: Can be chosen by the user, but shouldn’t be used to indicate categorical attributes, such as the type/role of the relationships. Or any numerical value, in that case, use line thickness instead. Color can however be used for highlighting, dimming, and tracing paths. Arrowhead color and fill should be the same as the line stroke.

### Self relationship
This relationship connects the same node together. For example, the relationship of FAVORITE_ACTRESS from the node “Emma Watson” could be “Emma Watson” herself. 
`;
