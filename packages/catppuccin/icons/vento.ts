import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVentoIcon],svg[catppuccin-vento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M1.5 1.5h4.469l5.687 13H7.594Z"></svg:path><svg:path fill="none" stroke="#f5bde6" stroke-linecap="round" stroke-linejoin="round" d="M10.031 1.5H14.5l-2.844 13H7.594Z"></svg:path><svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="m8.812 8l2.844 6.5H7.594Z"></svg:path>`,
})
export class CatppuccinVentoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
