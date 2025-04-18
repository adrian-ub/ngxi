import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileUserLineIcon],svg[ri-file-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zm9 8.508a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M7.527 17a4.5 4.5 0 0 1 8.946 0z"></svg:path>`,
})
export class RiFileUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
