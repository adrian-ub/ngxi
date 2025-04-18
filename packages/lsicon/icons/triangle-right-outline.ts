import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleRightOutlineIcon],svg[lsicon-triangle-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 12V4l5.5 4z"></svg:path>`,
})
export class LsiconTriangleRightOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
