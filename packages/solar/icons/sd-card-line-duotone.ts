import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSdCardLineDuotoneIcon],svg[solar-sd-card-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224a8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"></svg:path><svg:path stroke-linecap="round" d="M7 6v3" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 6v3"></svg:path><svg:path stroke-linecap="round" d="M13 6v3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSdCardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
