import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStudySkipIcon],svg[carbon-study-skip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22 9h5.2A11 11 0 0 0 7 15H5a13 13 0 0 1 23-8.3V3h2v8h-8z" fill="currentColor"></svg:path><svg:path d="M16 12a3 3 0 1 1-3 3a2.95 2.95 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5z" fill="currentColor"></svg:path><svg:path d="M23 30h-2v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3H9v-3a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5z" fill="currentColor"></svg:path>`,
})
export class CarbonStudySkipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
