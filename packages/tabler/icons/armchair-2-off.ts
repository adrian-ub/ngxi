import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArmchair2OffIcon],svg[tabler-armchair-2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 10V6a3 3 0 0 1 .128-.869m2.038-2.013Q7.564 3.001 8 3h8a3 3 0 0 1 3 3v4"></svg:path><svg:path d="M16.124 12.145a3 3 0 1 1 3.756 3.724M19 19H5v-3a3 3 0 1 1 3-3v2m0-3h4m-5 7v2m10-2v2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerArmchair2OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
