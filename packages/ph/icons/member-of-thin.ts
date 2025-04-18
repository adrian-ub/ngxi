import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMemberOfThinIcon],svg[ph-member-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 132H52.11A76.09 76.09 0 0 0 128 204h72a4 4 0 0 1 0 8h-72a84 84 0 0 1 0-168h72a4 4 0 0 1 0 8h-72a76.09 76.09 0 0 0-75.89 72H200a4 4 0 0 1 0 8"></svg:path>`,
})
export class PhMemberOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
