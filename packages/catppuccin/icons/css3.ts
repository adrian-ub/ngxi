import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCss3Icon],svg[catppuccin-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8aadf4" d="M1.5 1.5h13L13 13l-5 2l-5-2z"></svg:path><svg:path stroke="#cad3f5" d="M5 4.5h6l-.5 6l-2.5 1l-2.5-1l-.08-1m1.08-2h4"></svg:path></svg:g>`,
})
export class CatppuccinCss3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
