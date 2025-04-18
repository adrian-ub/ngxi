import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrokenImageIcon],svg[material-symbols-light-broken-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384v-5.676l2 2l4-4l4 4l4-4l2 2v5.677q0 .69-.462 1.153T18.384 20zm0-16h12.769q.69 0 1.153.463T20 5.616v5.67l-2-2l-4 4l-4-4l-4 4l-2-2v-5.67q0-.691.463-1.153T5.616 4"></svg:path>`,
})
export class MaterialSymbolsLightBrokenImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
