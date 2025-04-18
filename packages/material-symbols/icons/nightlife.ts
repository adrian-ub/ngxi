import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNightlifeIcon],svg[material-symbols-nightlife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-2h2v-4L1 5h14l-6 9v4h2v2zm.9-11h4.2l1.4-2h-7zM16 20q-1.25 0-2.125-.875T13 17t.875-2.125T16 14q.275 0 .525.038T17 14.2V5h5v3h-3v9q0 1.25-.875 2.125T16 20"></svg:path>`,
})
export class MaterialSymbolsNightlifeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
