import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftRightLineIcon],svg[ri-arrow-left-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.05 12.05L21 17l-4.95 4.95l-1.414-1.415L17.172 18H4v-2h13.172l-2.536-2.535zm-8.1-10l1.414 1.414l-2.536 2.535H20v2H6.828l2.536 2.536L7.95 11.95L3 7z"></svg:path>`,
})
export class RiArrowLeftRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
