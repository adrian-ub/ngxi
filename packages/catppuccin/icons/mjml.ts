import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinMjmlIcon],svg[catppuccin-mjml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-11-2h7a1 1 0 0 1 0 2h-7a1 1 0 1 1 0-2m11 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-11-2h7a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2m0-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-2h7a1 1 0 0 1 0 2h-7a1 1 0 1 1 0-2"></svg:path>`,
})
export class CatppuccinMjmlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
