import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleUpFilledIcon],svg[lsicon-triangle-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .404.206l4 5.5A.5.5 0 0 1 12 10.5H4a.5.5 0 0 1-.404-.794l4-5.5A.5.5 0 0 1 8 4" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
