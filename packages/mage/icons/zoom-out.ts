import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageZoomOutIcon],svg[mage-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.244 17.738a7.494 7.494 0 1 0 0-14.988a7.494 7.494 0 0 0 0 14.988m5.318-2.176l5.688 5.688m-7.007-11.006H6.245"></svg:path>`,
})
export class MageZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
