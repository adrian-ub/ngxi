import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinUrlIcon],svg[catppuccin-url-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="m5.5 10.5l5-5M3.73 6.61L2.67 7.67a4 4 0 1 0 5.66 5.66l1.06-1.06m2.88-2.88l1.06-1.06a4 4 0 1 0-5.66-5.66L6.61 3.73"></svg:path>`,
})
export class CatppuccinUrlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
