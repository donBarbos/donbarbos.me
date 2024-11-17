export default function CVPage() {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <embed
        src="/cv.pdf#zoom=page-fit"
        type="application/pdf"
        width="100%"
        height="100%"
        title="CV"
      />
    </div>
  );
}
