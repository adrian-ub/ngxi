import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinExeIcon],svg[catppuccin-exe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 2.5h10c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H3A1.5 1.5 0 0 1 1.5 13V4c0-.83.67-1.5 1.5-1.5m-1.5 3h13"></svg:path><svg:path d="m6.5 8l-2 2l2 2m3-4l2 2l-2 2"></svg:path></svg:g>`,
})
export class CatppuccinExeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
