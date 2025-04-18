import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconEmailSendOutlineIcon],svg[lsicon-email-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m5 4l4.5 3L14 4M2 8.5h5m-4 2h5m-3.5 2h10v-9h-10v3H1"></svg:path>`,
})
export class LsiconEmailSendOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
