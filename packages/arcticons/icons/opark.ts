import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOparkIcon],svg[arcticons-opark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.056 39.174a15.499 15.499 0 1 1-.101-30.369"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.028 15.242A9.3 9.3 0 1 1 11.6 24.001h0a15.5 15.5 0 0 1 27.795-9.436a15.5 15.5 0 0 1-15.399 24.62"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.002 32.768A9.3 9.3 0 1 1 36.4 24a15.5 15.5 0 0 1-12.344 15.175"></svg:path>`,
})
export class ArcticonsOparkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
