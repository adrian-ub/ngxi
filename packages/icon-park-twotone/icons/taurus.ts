import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTaurusIcon],svg[icon-park-twotone-taurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTaurus0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="31" r="9" fill="#555"></svg:circle><svg:path stroke-linecap="round" d="M44 8c0 7.732-8.954 14-20 14S4 15.732 4 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTaurus0)"></svg:path>`,
})
export class IconParkTwotoneTaurusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
