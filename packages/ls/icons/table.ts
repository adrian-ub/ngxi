import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsTableIcon],svg[ls-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 93v508c0 25 20 45 45 45h628c25 0 44-20 44-45V93c0-25-19-45-44-45H45C20 48 0 68 0 93m60 173V137h179v129zm209 0V137h180v129zm209 0V137h179v129zM60 426V297h179v129zm209 0V297h180v129zm209 0V297h179v129zM60 585V455h179v130zm209 0V455h180v130zm209 0V455h179v130z"></svg:path>`,
})
export class LsTableIcon {
  readonly viewBox = input("0 0 717 646")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
