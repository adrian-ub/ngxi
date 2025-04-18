import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinSemgrepIcon],svg[catppuccin-semgrep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8bd5ca" stroke-linecap="round" stroke-linejoin="round" d="M3 10.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m5 0a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m5 0a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class CatppuccinSemgrepIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
