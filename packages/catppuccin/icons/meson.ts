import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinMesonIcon],svg[catppuccin-meson-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 1.5C4 3.75 1.5 8 1.5 12.74C5 15 11 15 14.5 12.75C14.5 8 12 3.75 8 1.5"></svg:path><svg:path d="M10.43 8.55c-.11.74-.8 1.95-1.67 2.74c.12.18.18.39.18.6c-.55.3-1.09-.03-1.74-.62a5.77 5.77 0 0 1-1.6-2.96a.9.9 0 0 1-.6-.14c.05-.68.73-1.08 1.34-1.32a5.8 5.8 0 0 1 3.29.1c.08-.2.23-.35.4-.45c.58.4.5 1.38.4 2.05"></svg:path></svg:g>`,
})
export class CatppuccinMesonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
