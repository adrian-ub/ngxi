import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuestionaiIcon],svg[arcticons-questionai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.065 36.015l-.003 6.485h-14.06a18.5 18.5 0 1 1 14.75-29.665a18.5 18.5 0 0 1-.687 23.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.442 31.21v3.861l-8.44.03a11.1 11.1 0 1 1 8.44-3.892Z"></svg:path>`,
})
export class ArcticonsQuestionaiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
