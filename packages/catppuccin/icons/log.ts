import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinLogIcon],svg[catppuccin-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 3.5h9v11h-9z"></svg:path><svg:path d="M11.5 3.45V1.5h-9v11h1.95m3.05-5h3m-3 3h3"></svg:path></svg:g>`,
})
export class CatppuccinLogIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
