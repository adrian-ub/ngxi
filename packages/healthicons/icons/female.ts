import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsFemaleIcon],svg[healthicons-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M38 18c0 7.396-5.735 13.452-13 13.965V37h5a1 1 0 1 1 0 2h-5v4a1 1 0 1 1-2 0v-4h-5a1 1 0 1 1 0-2h5v-5.035c-7.265-.513-13-6.57-13-13.965c0-7.732 6.268-14 14-14s14 6.268 14 14M24 30c6.627 0 12-5.373 12-12S30.627 6 24 6s-12 5.373-12 12s5.373 12 12 12" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsFemaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
