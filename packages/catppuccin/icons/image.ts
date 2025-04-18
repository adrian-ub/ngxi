import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinImageIcon],svg[catppuccin-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#eed49f" d="M11.5 6A1.5 1.5 0 0 1 10 7.5A1.5 1.5 0 0 1 8.5 6A1.5 1.5 0 0 1 10 4.5A1.5 1.5 0 0 1 11.5 6"></svg:path><svg:path stroke="#a6da95" d="M7.5 13.5L11 10c.5-.5 1.5-.5 2 0l1.5 1.5"></svg:path><svg:path stroke="#a6da95" d="m1.5 9.5l2-2C4 7 5 7 5.5 7.5l4 4"></svg:path><svg:path stroke="#7dc4e4" d="M3 2.5h10c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H3A1.5 1.5 0 0 1 1.5 12V4c0-.83.67-1.5 1.5-1.5"></svg:path></svg:g>`,
})
export class CatppuccinImageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
