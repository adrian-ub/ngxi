import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowTopLeftIcon],svg[material-symbols-light-arrow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19V9.5H6.921l3.793 3.792l-.708.714L5 9l5-5l.714.714L6.92 8.5H18V19z"></svg:path>`,
})
export class MaterialSymbolsLightArrowTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
