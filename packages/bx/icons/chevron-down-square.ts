import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxChevronDownSquareIcon],svg[bx-chevron-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M5 5h14l.001 14H5z"></svg:path><svg:path fill="currentColor" d="M12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707l-1.414-1.414z"></svg:path>`,
})
export class BxChevronDownSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
