import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRegexcrosswordIcon],svg[arcticons-regexcrossword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 30.23V17.48h4.18a4.29 4.29 0 0 1 0 8.57H15m4.17 0l4.17 4.18m9.65-8.45l-6.38 8.45m6.38 0l-6.38-8.45M14.6 10.18L7.87 26m32.26-4L33.4 37.82"></svg:path>`,
})
export class ArcticonsRegexcrosswordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
