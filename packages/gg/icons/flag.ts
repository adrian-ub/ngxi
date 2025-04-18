import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFlagIcon],svg[gg-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 21h2V11h6v2h8V5h-7V3H4zm8-16H6v4h7v2h5V7h-6z" clip-rule="evenodd"></svg:path>`,
})
export class GgFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
