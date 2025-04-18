import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirOrangeSliceAltIcon],svg[iconoir-orange-slice-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.39 10.11L5.61 2.334c-4.295 4.296-4.295 11.26 0 15.556c4.296 4.296 11.26 4.296 15.557 0zm0 0l.353 8.133m-.354-8.132H5.612m7.779 0l-5.304 5.303"></svg:path>`,
})
export class IconoirOrangeSliceAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
