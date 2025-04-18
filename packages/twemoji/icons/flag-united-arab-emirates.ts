import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagUnitedArabEmiratesIcon],svg[twemoji-flag-united-arab-emirates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#068241" d="M32 5H9v9h27V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#EEE" d="M9 14h27v8H9z"></svg:path><svg:path fill="#141414" d="M9 31h23a4 4 0 0 0 4-4v-5H9z"></svg:path><svg:path fill="#EC2028" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h5V5z"></svg:path>`,
})
export class TwemojiFlagUnitedArabEmiratesIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
