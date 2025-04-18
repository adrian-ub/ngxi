import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvOffOutlineSharpIcon],svg[material-symbols-light-tv-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.767 17.167L20 16.42V5H8.6l-1-1H21v13.167zM4.81 4.041L5.77 5H4v12h12.342L2.162 2.808l.707-.708l18.685 18.685l-.708.707L17.316 18H15v2H9v-2H3V4.04zm9.819 6.969"></svg:path>`,
})
export class MaterialSymbolsLightTvOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
