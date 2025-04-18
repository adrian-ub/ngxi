import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownRightDuotoneIcon],svg[ph-arrow-elbow-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 176l-48 48v-96Z" opacity=".2"></svg:path><svg:path d="m221.66 170.34l-48-48A8 8 0 0 0 160 128v40H80V32a8 8 0 0 0-16 0v144a8 8 0 0 0 8 8h88v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M176 204.69v-57.38L204.69 176Z"></svg:path></svg:g>`,
})
export class PhArrowElbowDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
