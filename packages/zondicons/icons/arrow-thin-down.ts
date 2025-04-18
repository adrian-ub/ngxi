import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsArrowThinDownIcon],svg[zondicons-arrow-thin-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 16.172l-6.071-6.071l-1.414 1.414L10 20l.707-.707l7.778-7.778l-1.414-1.414L11 16.172V0H9z"></svg:path>`,
})
export class ZondiconsArrowThinDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
