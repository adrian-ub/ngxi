import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsQueueMusicIcon],svg[material-symbols-queue-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20q-1.25 0-2.125-.875T13 17t.875-2.125T16 14q.275 0 .525.038T17 14.2V6h5v2h-3v9q0 1.25-.875 2.125T16 20M3 16v-2h8v2zm0-4v-2h12v2zm0-4V6h12v2z"></svg:path>`,
})
export class MaterialSymbolsQueueMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
