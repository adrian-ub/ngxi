import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneRotate90DegreesCwIcon],svg[ic-twotone-rotate-90-degrees-cw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.64 19.37c3.03 3.03 7.67 3.44 11.15 1.25l-1.46-1.46c-2.66 1.43-6.04 1.03-8.28-1.21a7.007 7.007 0 0 1 0-9.9C7.42 6.69 9.21 6.03 11 6.03V9l4-4l-4-4v3.01c-2.3 0-4.61.87-6.36 2.63c-3.52 3.51-3.52 9.21 0 12.73M11 13l6 6l6-6l-6-6zm6 3.17L13.83 13L17 9.83L20.17 13z"></svg:path><svg:path fill="currentColor" d="m13.817 12.995l3.175-3.175l3.175 3.174l-3.175 3.175z" opacity=".3"></svg:path>`,
})
export class IcTwotoneRotate90DegreesCwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
