exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      biology: ["Cell Structure", "Enzymes", "Respiration"],
      chemistry: ["Atomic Structure", "Bonding", "Acids & Bases"],
      physics: ["Motion", "Forces", "Waves"],
      maths: ["Algebra", "Geometry", "Trigonometry"]
    })
  }
}
