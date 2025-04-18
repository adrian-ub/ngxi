import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMessageOffIcon],svg[mdi-message-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.95 17.75L5.2 2H20a2 2 0 0 1 2 2v12c0 .76-.43 1.41-1.05 1.75M2.39 1.73L1.11 3l.89.9V22l4-4h10.11l4.73 4.73l1.27-1.27z"></svg:path>`,
})
export class MdiMessageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
