import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLyricsIcon],svg[material-symbols-lyrics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14h4v-2H6zm13-2q-1.25 0-2.125-.875T16 9t.875-2.125T19 6q.275 0 .513.05t.487.125V1h4v2h-2v6q0 1.25-.875 2.125T19 12M6 11h7V9H6zm0-3h7V6H6zm0 10l-4 4V4q0-.825.588-1.412T4 2h11q.825 0 1.413.588T17 4v.425q-1.375.6-2.187 1.838T14 9t.813 2.738T17 13.575V16q0 .825-.587 1.413T15 18z"></svg:path>`,
})
export class MaterialSymbolsLyricsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
