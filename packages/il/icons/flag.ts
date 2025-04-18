import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilFlagIcon],svg[il-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M628 340q10 11 5 25t-22 14H182q-11 0-18 8t-5 19l56 316q2 11-5 19t-18 9h-45q-20 0-23-20L1 35q-2-11 5-19t18-8h535q14 0 21 11t-1 24l-78 136q-9 15 3 27z"></svg:path>`,
})
export class IlFlagIcon {
  readonly viewBox = input("0 0 640 850")
  readonly width = input("0.76em")
  readonly height = input("1em")
}
