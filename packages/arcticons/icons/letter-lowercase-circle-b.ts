import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterLowercaseCircleBIcon],svg[arcticons-letter-lowercase-circle-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 25.4a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4V28a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4m0 4V16"></svg:path>`,
})
export class ArcticonsLetterLowercaseCircleBIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
