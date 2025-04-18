import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlashlightOff24RegularIcon],svg[fluent-flashlight-off-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.53 14.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0M3.28 2.22a.75.75 0 1 0-1.06 1.06l6.03 6.03v1.38l-5.22 5.219a2.25 2.25 0 0 0 0 3.182l1.88 1.879a2.25 2.25 0 0 0 3.182 0l5.22-5.22h1.378l6.03 6.03a.75.75 0 0 0 1.061-1.06zM9 12.06L11.94 15l-4.91 4.909a.75.75 0 0 1-1.06 0L4.09 18.03a.75.75 0 0 1 0-1.06zm8.844 2.035l1.565-1.565a.75.75 0 0 0 0-1.06L12.53 4.59a.75.75 0 0 0-1.06 0L9.904 6.155l-1.06-1.06l1.564-1.565a2.25 2.25 0 0 1 3.182 0l6.878 6.879a2.25 2.25 0 0 1 0 3.182l-1.564 1.565z"></svg:path>`,
})
export class FluentFlashlightOff24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
