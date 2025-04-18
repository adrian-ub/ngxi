import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterLowercaseSquareJIcon],svg[arcticons-letter-lowercase-square-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.007 18.275v12c0 2.21-1.774 4-3.962 4h0a3.93 3.93 0 0 1-2.802-1.172"></svg:path><svg:circle cx="27.007" cy="14.475" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsLetterLowercaseSquareJIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
