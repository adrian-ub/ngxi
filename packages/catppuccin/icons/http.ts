import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinHttpIcon],svg[catppuccin-http-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 8A6.5 6.5 0 0 1 8 14.5A6.5 6.5 0 0 1 1.5 8A6.5 6.5 0 0 1 8 1.5A6.5 6.5 0 0 1 14.5 8"></svg:path><svg:path d="M8 1.5c1.67 2 2.5 4.17 2.5 6.5s-.83 4.5-2.5 6.5m0-13A9.96 9.96 0 0 0 5.5 8c0 2.33.83 4.5 2.5 6.5m-5.5-4h11m-11-5h11"></svg:path></svg:g>`,
})
export class CatppuccinHttpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
