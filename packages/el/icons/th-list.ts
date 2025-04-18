import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elThListIcon],svg[el-th-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v300h300V0zm468.75 0v300H1200V0zM0 450v300h300V450zm468.75 0v300H1200V450zM0 900v300h300V900zm468.75 0v300H1200V900z"></svg:path>`,
})
export class ElThListIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
