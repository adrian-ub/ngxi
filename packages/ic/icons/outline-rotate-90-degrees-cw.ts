import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineRotate90DegreesCwIcon],svg[ic-outline-rotate-90-degrees-cw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13a9 9 0 0 0 13.79 7.62l-1.46-1.46c-.99.53-2.13.84-3.33.84c-3.86 0-7-3.14-7-7s3.14-7 7-7h.17L9.59 7.59L11 9l4-4l-4-4l-1.42 1.41L11.17 4H11a9 9 0 0 0-9 9m9 0l6 6l6-6l-6-6zm6 3.17L13.83 13L17 9.83L20.17 13z"></svg:path>`,
})
export class IcOutlineRotate90DegreesCwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
