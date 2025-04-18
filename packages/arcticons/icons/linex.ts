import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinexIcon],svg[arcticons-linex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.153 10.969l5.352-5.347l10.032 10.03l-15.384 15.386"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.056 27.116l5.347 5.352L32.373 42.5L16.986 27.116"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.847 37.066l-5.352 5.347l-10.032-10.03l15.384-15.387"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.013 20.884l-5.346-5.352L15.697 5.5l15.386 15.384"></svg:path><svg:rect width="5.561" height="5.561" x="21.26" y="21.213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".948" transform="rotate(-45 24.04 23.994)"></svg:rect>`,
})
export class ArcticonsLinexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
