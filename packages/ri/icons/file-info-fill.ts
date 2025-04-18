import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileInfoFillIcon],svg[ri-file-info-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-5 5v2h2V7zm0 4v6h2v-6z"></svg:path>`,
})
export class RiFileInfoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
