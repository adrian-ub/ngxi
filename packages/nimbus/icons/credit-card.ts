import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusCreditCardIcon],svg[nimbus-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.55 9.75h2V11h-2z"></svg:path><svg:path fill="currentColor" d="M15.32 2.5H.68a.69.69 0 0 0-.68.71v9.58a.69.69 0 0 0 .68.71h14.64a.69.69 0 0 0 .68-.71V3.21a.69.69 0 0 0-.68-.71m-.57 1.25V5H1.25V3.75zm-13.5 8.5V7.5h13.5v4.75z"></svg:path>`,
})
export class NimbusCreditCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
