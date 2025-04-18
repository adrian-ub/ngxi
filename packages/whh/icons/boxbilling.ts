import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBoxbillingIcon],svg[whh-boxbilling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960 768l-448 256L64 768L0 192L512 0l512 192zM512 192L256 320l32 256l224 128l224-128l32-256z"></svg:path>`,
})
export class WhhBoxbillingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
