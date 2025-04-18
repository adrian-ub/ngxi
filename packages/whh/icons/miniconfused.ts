import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMiniconfusedIcon],svg[whh-miniconfused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 384q-66 0-113-56.5t-47-136T495 56T608 0t113 56t47 135.5t-47 136T608 384m-480 0q-53 0-90.5-47T0 224t37.5-113T128 64t90.5 47T256 224t-37.5 113t-90.5 47M64 640h640q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19H64q-27 0-45.5-19T0 703.5t18.5-45T64 640"></svg:path>`,
})
export class WhhMiniconfusedIcon {
  readonly viewBox = input("0 0 768 768")
  readonly width = input("1em")
  readonly height = input("1em")
}
