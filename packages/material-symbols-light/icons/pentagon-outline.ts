import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPentagonOutlineIcon],svg[material-symbols-light-pentagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.085 19.5h9.83l3.306-9.917L12 3.835L3.779 9.583zm-.72 1L2.597 9.192L12 2.616l9.404 6.576l-3.77 11.308zM12 11.667"></svg:path>`,
})
export class MaterialSymbolsLightPentagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
