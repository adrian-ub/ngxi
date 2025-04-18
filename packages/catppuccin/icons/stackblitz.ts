import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinStackblitzIcon],svg[catppuccin-stackblitz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="m3.5 9.5l7.04-9l-2.04 6h4l-7.04 9l2.04-6z"></svg:path>`,
})
export class CatppuccinStackblitzIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
