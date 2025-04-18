import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUploadTrack2LineDuotoneIcon],svg[solar-upload-track-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 15V7"></svg:path><svg:circle cx="11" cy="15" r="2"></svg:circle><svg:path stroke-linecap="round" d="M16 10a3 3 0 0 1-3-3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 22v-7m0 0l2.5 2.5M18 15l-2.5 2.5"></svg:path><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarUploadTrack2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
