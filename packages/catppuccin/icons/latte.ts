import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinLatteIcon],svg[catppuccin-latte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round"><svg:path stroke="#eed49f" d="M10.2 4s-1.3-.7-2.5-.7c-1.3 0-1.9.7-1.9 2c0 1.4 2.5 2 2.5 2s1.9.7 1.9 2c0 1.4-.6 2-1.9 2c-1.2 0-2.5-.6-2.5-.6M8.3 2v11.3"></svg:path><svg:path stroke="#f5a97f" d="M4 2s-.7 0-1.3.7C2 3.3 2 6 2 6.7C2 7.3.8 7.3.8 8s1.3.7 1.3 1.3c0 .7 0 3.4.6 4c.6.7 1.2.7 1.2.7m8.1 0s.7 0 1.3-.7c.6-.6.6-3.3.6-4c0-.6 1.3-.6 1.3-1.3s-1.3-.7-1.3-1.3c0-.7 0-3.4-.6-4c-.6-.7-1.2-.7-1.2-.7"></svg:path></svg:g>`,
})
export class CatppuccinLatteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
