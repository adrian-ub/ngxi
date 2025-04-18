import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsScrollVIcon],svg[gg-arrows-scroll-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.414 10.11l.004.003l-1.414 1.414l-.004-.004l-.004.004l-1.414-1.414l.004-.004L7.76 7.284L9.175 5.87L12 8.695l2.825-2.825l1.414 1.414zM12 15.305l2.825 2.825l1.414-1.414l-2.825-2.825l.004-.004l-1.414-1.414l-.004.004l-.004-.004l-1.414 1.414l.004.004l-2.825 2.825l1.414 1.414z"></svg:path>`,
})
export class GgArrowsScrollVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
