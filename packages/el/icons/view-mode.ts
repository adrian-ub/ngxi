import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elViewModeIcon],svg[el-view-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1110.645 0L0 1111.963L89.355 1200L1200 89.429zM0 1.758v281.323h281.25V1.831zm331.421 0v281.323h281.25V1.831zM0 338.452v281.25h281.25v-281.25zm331.421 0v281.25l281.25-281.25zm494.311 297.876L652.295 794.312H1200V636.328zM614.795 838.33v157.982H1200V838.33zm0 202.002v157.91H1200v-157.91z"></svg:path>`,
})
export class ElViewModeIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
