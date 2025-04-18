import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwapHorizIcon],svg[material-symbols-swap-horiz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 20l-5-5l5-5l1.4 1.425L5.825 14H13v2H5.825L8.4 18.575zm10-6l-1.4-1.425L18.175 10H11V8h7.175L15.6 5.425L17 4l5 5z"></svg:path>`,
})
export class MaterialSymbolsSwapHorizIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
