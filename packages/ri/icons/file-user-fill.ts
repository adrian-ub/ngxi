import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileUserFillIcon],svg[ri-file-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-4 9.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M7.527 17h8.946a4.5 4.5 0 0 0-8.946 0"></svg:path>`,
})
export class RiFileUserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
