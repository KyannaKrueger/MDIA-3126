export default function DisplayArtData({ artData, loading }) {
    if (loading) return <div>Loading your masterpiece!</div>;
  
    if (artData) {
      const dataForDisplay = artData.map((entry, i) => (
        <article key={i}>
          <img src={entry.image_id} alt={entry.alt_image_ids} />
          <h3>{entry.title}</h3>
          <p>{entry.short_description}</p>
        </article>
      ));
  
      return <section>{dataForDisplay}</section>;
    }
  
    return <div>Empty, no art in this museum!</div>;
  }
  