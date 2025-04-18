import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwapVertIcon],svg[material-symbols-light-swap-vert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.808 12.308V4.92L5.714 8.016L5 7.308L9.308 3l4.308 4.308l-.714.708L9.808 4.92v7.387zM14.673 21l-4.307-4.308l.713-.707l3.094 3.094v-7.387h1v7.387l3.094-3.095l.714.708z"></svg:path>`,
})
export class MaterialSymbolsLightSwapVertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
