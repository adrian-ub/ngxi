import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScoreIcon],svg[material-symbols-light-score-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm6.692-8.308h.884V6.308h-.884zm3.038 0h1.085L14.277 9l2.154-2.692h-1.085L13.192 9zm-8.038 0h3.384v-.884h-2.5V9.442h2.5V6.308H7.308v.884h2.5v1.366h-2.5zM19 12.616v-1.347l-6 6l-4-4l-4 4v1.347l4-4l4 4z"></svg:path>`,
})
export class MaterialSymbolsLightScoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
