import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinTurboIcon],svg[catppuccin-turbo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="8" cy="8" r="4.5" stroke="#cad3f5"></svg:circle><svg:path stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round" d="M9.58 14.3a6.5 6.5 0 0 1-4.55-.52"></svg:path><svg:path stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M8.52 1.52a6.5 6.5 0 0 1 5.84 5.12"></svg:path><svg:path stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round" d="M13.91 10.7a6.5 6.5 0 0 1-2.78 3"></svg:path><svg:path stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M14.38 6.76a6.5 6.5 0 0 1-.42 3.83"></svg:path><svg:path stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round" d="M3.63 12.8a6.5 6.5 0 0 1-2.1-4.14"></svg:path></svg:g>`,
})
export class CatppuccinTurboIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
