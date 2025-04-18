import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinWindiIcon],svg[catppuccin-windi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M1.5 5.5H6a2 2 0 1 0-2-2m-2.5 5H12A2.5 2.5 0 1 0 9.5 6m-2 7A1.5 1.5 0 1 0 9 11.5H5.5m-4 0h2"></svg:path>`,
})
export class CatppuccinWindiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
