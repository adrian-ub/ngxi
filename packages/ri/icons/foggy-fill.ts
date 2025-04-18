import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFoggyFillIcon],svg[ri-foggy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.584 13.007a8 8 0 1 1 14.873-5.908a5.5 5.5 0 0 1 6.52 5.908zM4 19h17v2H4zm-2-4h21v2H2z"></svg:path>`,
})
export class RiFoggyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
