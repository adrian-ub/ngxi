import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVsim2Icon],svg[arcticons-vsim-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="29" x="4.5" y="9.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 27.625h13a3.222 3.222 0 1 1 0 6.444m-13-13.694h13a3.222 3.222 0 1 0 0-6.444m26 13.694h-13a3.222 3.222 0 1 0 0 6.444m13-13.694h-13a3.222 3.222 0 1 1 0-6.444m-18 6.444v7.25m23-7.25v7.25"></svg:path>`,
})
export class ArcticonsVsim2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
