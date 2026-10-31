# Summenbouldern_Rechner

Punktezähler fürs Summenbouldern, direkt im Browser spielbar.

- 1 bis 8 Teams mit eigenen Namen und Farben
- Modi: Freies Spiel, Zielpunktzahl (gleich für alle oder pro Team), Spiel auf Zeit
- Statistik: wie oft jedes Team welche Zahl getippt hat
- Schwierigkeit ◆: jede Eingabe zählt ihre Zahl im Quadrat (1 → 1, 9 → 81)

Die App besteht aus `index.html` (HTML, CSS und JavaScript, ohne Server). Spielstände werden im Browser des jeweiligen Geräts gespeichert.

## Offline spielen

Nach dem ersten Öffnen funktioniert die App auch ohne Internet, zum Beispiel in der Boulderhalle mit schlechtem Empfang. `sw.js` speichert dafür alle Dateien inklusive Schriften auf dem Gerät. Neue Versionen werden im Hintergrund geladen und sind beim nächsten Öffnen aktiv.

Bei Änderungen an den Dateien die Versionsnummer `CACHE` in `sw.js` erhöhen.

Schriften: Bricolage Grotesque und Atkinson Hyperlegible, beide unter der SIL Open Font License (siehe `fonts/`).

## Spielen

Über GitHub Pages: Settings → Pages → Source „Deploy from a branch“ → Branch `main`, Ordner `/ (root)`.
Danach ist die App unter `https://<benutzername>.github.io/<repo-name>/` erreichbar und lässt sich auf dem Handy über „Zum Home-Bildschirm“ wie eine App ablegen.
