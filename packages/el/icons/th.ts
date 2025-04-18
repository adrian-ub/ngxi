import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elThIcon],svg[el-th-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v300h300V0zm450 0v300h300V0zm450 0v300h300V0zM0 450v300h300V450zm450 0v300h300V450zm450 0v300h300V450zM0 900v300h300V900zm450 0v300h300V900zm450 0v300h300V900z"></svg:path>`,
})
export class ElThIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
