import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLewdfiIcon],svg[arcticons-lewdfi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="36.424" height="28.952" x="5.788" y="14.048" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.825"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.635 14.048L26.232 5"></svg:path><svg:circle cx="32.257" cy="28.524" r="4.825" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.133 28.524h11.905m-11.905-3.619h11.905m-11.905 7.238h11.905"></svg:path>`,
})
export class ArcticonsLewdfiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
