import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMoonriseIcon],svg[carbon-moonrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h28v2H2zm24-2h-2a8 8 0 0 0-2.037-5.333l1.49-1.335A9.98 9.98 0 0 1 26 26m-10 0h-2a9.93 9.93 0 0 1 3.754-7.804A8 8 0 0 0 16 18a8.01 8.01 0 0 0-8 8H6a10.01 10.01 0 0 1 10-10a9.9 9.9 0 0 1 4.446 1.052a1 1 0 0 1 0 1.79A7.96 7.96 0 0 0 16 26m0-24l-5 5l1.41 1.41L15 5.83V14h2V5.83l2.59 2.58L21 7z"></svg:path>`,
})
export class CarbonMoonriseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
