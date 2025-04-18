import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCircleCiIcon],svg[catppuccin-circle-ci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.67 9.5a6.5 6.5 0 1 0 0-3H4.3a4 4 0 1 1 0 3z"></svg:path><svg:path d="M8.5 8a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path></svg:g>`,
})
export class CatppuccinCircleCiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
