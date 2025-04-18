import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHomeyIcon],svg[arcticons-homey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="12.332" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.72 32.72c7.203-7.202 7.203-18.88 0-26.083a18.4 18.4 0 0 0-5.846-3.946"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.28 32.72c7.202 7.203 18.88 7.203 26.083 0a18.4 18.4 0 0 0 3.946-5.846"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.28 15.28c-7.203 7.202-7.203 18.88 0 26.083a18.4 18.4 0 0 0 5.846 3.946"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.72 15.28c-7.202-7.203-18.88-7.203-26.083 0a18.4 18.4 0 0 0-3.946 5.846"></svg:path>`,
})
export class ArcticonsHomeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
