import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUploadTrack2LinearIcon],svg[solar-upload-track-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 15V7"></svg:path><svg:circle cx="11" cy="15" r="2"></svg:circle><svg:path stroke-linecap="round" d="M16 10a3 3 0 0 1-3-3"></svg:path><svg:path stroke-linecap="round" d="M14 21.8q-.97.198-2 .2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q-.002 1.03-.2 2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 22v-7m0 0l2.5 2.5M18 15l-2.5 2.5"></svg:path></svg:g>`,
})
export class SolarUploadTrack2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
