import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneUnfoldLessIcon],svg[ic-twotone-unfold-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.41 18.59L8.83 20L12 16.83L15.17 20l1.41-1.41L12 14zm9.18-13.18L15.17 4L12 7.17L8.83 4L7.41 5.41L12 10z"></svg:path>`,
})
export class IcTwotoneUnfoldLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
