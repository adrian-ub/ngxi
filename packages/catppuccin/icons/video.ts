import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVideoIcon],svg[catppuccin-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 2.5h10c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H3A1.5 1.5 0 0 1 1.5 13V4c0-.83.67-1.5 1.5-1.5m-1.5 3h13"></svg:path><svg:path d="m3.5 5.5l2-3m1.5 3l2-3m1.5 3l2-3M6.5 8v4l4-2z"></svg:path></svg:g>`,
})
export class CatppuccinVideoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
