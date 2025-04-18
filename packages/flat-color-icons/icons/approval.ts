import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsApprovalIcon],svg[flat-color-icons-approval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8BC34A" d="m24 3l4.7 3.6l5.8-.8l2.2 5.5l5.5 2.2l-.8 5.8L45 24l-3.6 4.7l.8 5.8l-5.5 2.2l-2.2 5.5l-5.8-.8L24 45l-4.7-3.6l-5.8.8l-2.2-5.5l-5.5-2.2l.8-5.8L3 24l3.6-4.7l-.8-5.8l5.5-2.2l2.2-5.5l5.8.8z"></svg:path><svg:path fill="#CCFF90" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"></svg:path>`,
})
export class FlatColorIconsApprovalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
