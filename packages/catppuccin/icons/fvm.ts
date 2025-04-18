import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFvmIcon],svg[catppuccin-fvm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M9.024 12.85L9 10.505h6.5v2.35zM5.4 8.005L.5 3.155l3.433.005L8 7.155c.47.476.47 1.24 0 1.7l-4 4H.5z"></svg:path>`,
})
export class CatppuccinFvmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
