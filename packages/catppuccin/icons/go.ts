import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinGoIcon],svg[catppuccin-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round" d="m15.48 8.06l-4.85.48m4.85-.48a4.98 4.98 0 0 1-4.54 5.42a5 5 0 1 1 2.95-8.66l-1.7 1.84a2.5 2.5 0 0 0-4.18 2.06c.05.57.3 1.1.69 1.51c.25.27 1 .83 1.78.82c.8-.02 1.58-.25 2.07-.81c0 0 .8-.96.68-1.88M2.5 8.5l-2 .01m1.5 2h1.5m-2-3.99l2-.02"></svg:path>`,
})
export class CatppuccinGoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
