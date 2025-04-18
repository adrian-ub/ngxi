import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCarIcon],svg[arcticons-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.4 36.146s-.194 1.51 0 2.228c.135.498.264 1.337.78 1.337h2.897c.516 0 .645-.839.78-1.337c.194-.717 0-2.228 0-2.228"></svg:path><svg:rect width="39" height="14.486" x="4.5" y="21.66" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.457" ry="4.457"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.143 36.146s-.194 1.51 0 2.228c.135.498.264 1.337.78 1.337h2.897c.516 0 .645-.839.78-1.337c.194-.717 0-2.228 0-2.228"></svg:path><svg:circle cx="10.629" cy="29.46" r="2.229" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.957 21.66l2.563-10.029c.438-1.713 2.353-3.343 4.123-3.343h16.714c1.77 0 3.685 1.63 4.123 3.343l2.563 10.029"></svg:path><svg:circle cx="37.371" cy="29.46" r="2.229" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
