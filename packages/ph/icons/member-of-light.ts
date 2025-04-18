import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMemberOfLightIcon],svg[ph-member-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 134H54.26A74.09 74.09 0 0 0 128 202h72a6 6 0 0 1 0 12h-72a86 86 0 0 1 0-172h72a6 6 0 0 1 0 12h-72a74.09 74.09 0 0 0-73.74 68H200a6 6 0 0 1 0 12"></svg:path>`,
})
export class PhMemberOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
