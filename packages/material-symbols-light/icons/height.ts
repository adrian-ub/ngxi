import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHeightIcon],svg[material-symbols-light-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.98 20l-3.288-3.288l.689-.689l2.1 2.056V5.902L9.4 7.977l-.688-.688L12 4l3.289 3.289l-.708.713l-2.1-2.08v12.157l2.1-2.056l.688.689z"></svg:path>`,
})
export class MaterialSymbolsLightHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
