import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsScrollHIcon],svg[gg-arrows-scroll-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.305 12l2.825-2.825l-1.414-1.414l-2.825 2.825l-.004-.004l-1.414 1.414l.004.004l-.004.004l1.414 1.414l.004-.004l2.825 2.825l1.414-1.414zm-5.195-1.414l.003-.004l1.414 1.414l-.004.004l.004.004l-1.414 1.414l-.004-.004l-2.825 2.825l-1.414-1.414L8.695 12L5.87 9.175l1.414-1.414z"></svg:path>`,
})
export class GgArrowsScrollHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
