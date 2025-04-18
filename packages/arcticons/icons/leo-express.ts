import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLeoExpressIcon],svg[arcticons-leo-express-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="33.627" cy="18.937" r="2.938" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.098" cy="13.145" r="2.938" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.355" cy="7.438" r="2.938" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.332 26.356a2.938 2.938 0 0 1 2.817 5.153M15.818 43.108a2.938 2.938 0 0 1-2.983-5.062"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.872 38.015l19.553-11.714h.016m-16.6 16.789l19.367-11.615h.016"></svg:path>`,
})
export class ArcticonsLeoExpressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
