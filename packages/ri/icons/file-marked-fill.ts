import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileMarkedFillIcon],svg[ri-file-marked-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992M7 4v9l3.5-2l3.5 2V4z"></svg:path>`,
})
export class RiFileMarkedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
