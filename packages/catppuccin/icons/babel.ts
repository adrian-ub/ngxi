import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinBabelIcon],svg[catppuccin-babel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M3.42 4.02c1.1-.68 2.32-1.53 3.63-1.95c1.16-.38 2.43-.73 3.62-.5c.6.13 1.27.41 1.57.93c.3.5.3 1.18.05 1.68c-.97 1.88-5.26 3.6-5.26 3.6m1.2-5.92L2.47 14.5s6.14-2.13 8.23-4.43c.44-.48.96-1.17.75-1.78c-.18-.53-.9-.75-1.45-.85c-1.56-.26-4.67.92-4.67.92"></svg:path>`,
})
export class CatppuccinBabelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
