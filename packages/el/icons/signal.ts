import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elSignalIcon],svg[el-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1200V0h240v1200zM640 300h240v900H640zM320 600h240v600H320zM0 900h240v300H0z"></svg:path>`,
})
export class ElSignalIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
