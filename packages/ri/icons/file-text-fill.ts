import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileTextFillIcon],svg[ri-file-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9v11.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 0 0 1 1zm0-2h-5V2.003zM8 7v2h3V7zm0 4v2h8v-2zm0 4v2h8v-2z"></svg:path>`,
})
export class RiFileTextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
