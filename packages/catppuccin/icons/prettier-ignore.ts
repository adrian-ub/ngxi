import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPrettierIgnoreIcon],svg[catppuccin-prettier-ignore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5h11m-11 6h5m-5-4h5m3 4h5m-5-4h5m-13 2h5m-5 6h5m3-6h5m-13 4h11m-11 4h5"></svg:path>`,
})
export class CatppuccinPrettierIgnoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
