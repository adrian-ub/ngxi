import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatWrapIcon],svg[tdesign-textformat-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v2H2zm0 7h15c1.148 0 2.38.284 3.35 1.012C21.36 12.77 22 13.946 22 15.5s-.64 2.73-1.65 3.488C19.38 19.716 18.148 20 17 20h-5.414l1.707-1.707l2-2l.707-.707L17.414 17l-.707.707l-.293.293H17c.852 0 1.62-.216 2.15-.613c.49-.367.85-.941.85-1.887s-.36-1.52-.85-1.887C18.62 13.216 17.852 13 17 13H2zm1 7H2v2h8v-2z"></svg:path>`,
})
export class TdesignTextformatWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
