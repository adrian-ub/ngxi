import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTicketDuotoneIcon],svg[ph-ticket-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 128a32 32 0 0 0 32 32v32a8 8 0 0 1-8 8H96V56h128a8 8 0 0 1 8 8v32a32 32 0 0 0-32 32" opacity=".2"></svg:path><svg:path d="M232 104a8 8 0 0 0 8-8V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a8 8 0 0 0 8 8a24 24 0 0 1 0 48a8 8 0 0 0-8 8v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-8-8a24 24 0 0 1 0-48M32 167.2a40 40 0 0 0 0-78.4V64h56v128H32Zm192 0V192H104V64h120v24.8a40 40 0 0 0 0 78.4"></svg:path></svg:g>`,
})
export class PhTicketDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
