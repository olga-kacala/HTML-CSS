# Instrukcje

1. Zmodyfikuj layout tak, aby pierwszy kontener używał: `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`
2. Drugi kontener powinien używać: `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));`
3. Dodaj `gap` o takiej samej wartości dla obu kontenerów.
4. Uruchom devtools => responsive view w przeglądarce i porównaj zachowanie elementów wewnątrz obu kontenerów.