import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoDeviantartIcon],svg[fontisto-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.642 4.794l.23-.43V0h-4.367l-.436.44l-2.058 3.925l-.646.435H.015v5.993h4.04l.36.436l-4.18 7.981l-.24.43V24h4.37l.436-.44l2.07-3.925l.644-.436h7.35v-5.993h-4.05l-.36-.438l4.186-7.977z"></svg:path>`,
})
export class FontistoDeviantartIcon {
  readonly viewBox = input("0 0 15 24")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
