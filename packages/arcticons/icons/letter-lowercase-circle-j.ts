import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterLowercaseCircleJIcon],svg[arcticons-letter-lowercase-circle-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.007 18.275v12c0 2.21-1.774 4-3.962 4h0a3.93 3.93 0 0 1-2.802-1.172"></svg:path><svg:circle cx="27.007" cy="14.475" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsLetterLowercaseCircleJIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
