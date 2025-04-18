import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinZigIcon],svg[catppuccin-zig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M10 3.5H6l-1.5 2h4l-7 9l4.5-2h4l1.5-2h-4l7-9z"></svg:path>`,
})
export class CatppuccinZigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
