import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinConfigIcon],svg[catppuccin-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711" d="M7.997 9.694a1.726 1.695 0 1 0 0-3.39a1.726 1.695 0 0 0 0 3.39m3.021-6.78l3.021 5.085l-3.021 5.085H4.976L1.955 7.999l3.021-5.085z"></svg:path>`,
})
export class CatppuccinConfigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
