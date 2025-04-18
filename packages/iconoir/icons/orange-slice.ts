import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirOrangeSliceIcon],svg[iconoir-orange-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.613 10.11l7.778-7.777c4.295 4.296 4.295 11.26 0 15.556c-4.296 4.296-11.261 4.296-15.557 0zm0 0l-.354 8.133m.354-8.132h7.778m-7.778 0l5.303 5.303"></svg:path>`,
})
export class IconoirOrangeSliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
