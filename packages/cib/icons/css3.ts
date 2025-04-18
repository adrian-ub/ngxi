import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibCss3Icon],svg[cib-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 2l-4 23l-13.956 5L0 25l1.225-5.925H6.35l-.5 2.538l7.275 2.775l8.381-2.775l1.175-6.069H1.844l1-5.125H23.7l.656-3.294H3.519L4.538 2z"></svg:path>`,
})
export class CibCss3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
