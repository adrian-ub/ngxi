import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayForwardsIcon],svg[gg-play-forwards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.002 17h-3V7h3zm-4-5L10 17V7zM2 17l7.002-5L2 7z"></svg:path>`,
})
export class GgPlayForwardsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
