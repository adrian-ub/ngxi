import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlaster2BoldIcon],svg[solar-adhesive-plaster-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.91 13.332l-7.578 7.577a5.41 5.41 0 0 0 7.577-7.577"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m12.235 19.885l7.65-7.65l-8.12-8.12l-7.65 7.65zm-2.356-8.592a1 1 0 1 1-1.414 1.414a1 1 0 0 1 1.414-1.414m2.828 4.243a1 1 0 1 0-1.414-1.415a1 1 0 0 0 1.414 1.415m0-7.071a1 1 0 1 1-1.414 1.414a1 1 0 0 1 1.414-1.414m2.828 4.242a1 1 0 1 0-1.414-1.414a1 1 0 0 0 1.414 1.414" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m3.09 10.668l7.578-7.577a5.41 5.41 0 0 0-7.577 7.577"></svg:path>`,
})
export class SolarAdhesivePlaster2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
