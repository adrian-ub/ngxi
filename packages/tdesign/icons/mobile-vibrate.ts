import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMobileVibrateIcon],svg[tdesign-mobile-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1h14v22H5zm2 2v18h10V3zM4 5v14H2V5zm18 0v14h-2V5zM11 17h2.004v2.004H11z"></svg:path>`,
})
export class TdesignMobileVibrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
