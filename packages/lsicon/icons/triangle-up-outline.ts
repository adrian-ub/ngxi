import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleUpOutlineIcon],svg[lsicon-triangle-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M12 10H4l4-5.5z"></svg:path>`,
})
export class LsiconTriangleUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
