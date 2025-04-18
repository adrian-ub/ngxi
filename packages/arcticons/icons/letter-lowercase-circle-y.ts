import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterLowercaseCircleYIcon],svg[arcticons-letter-lowercase-circle-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M28 22.6V28a4 4 0 0 1-4 4h0a4 4 0 0 1-2.828-1.171"></svg:path><svg:path d="M28 16v6.6a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V16"></svg:path></svg:g>`,
})
export class ArcticonsLetterLowercaseCircleYIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
