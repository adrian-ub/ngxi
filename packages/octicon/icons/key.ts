import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconKeyIcon],svg[octicon-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12.83 2.17C12.08 1.42 11.14 1.03 10 1c-1.13.03-2.08.42-2.83 1.17S6.04 3.86 6.01 5c0 .3.03.59.09.89L0 12v1l1 1h2l1-1v-1h1v-1h1v-1h2l1.09-1.11c.3.08.59.11.91.11c1.14-.03 2.08-.42 2.83-1.17S13.97 6.14 14 5c-.03-1.14-.42-2.08-1.17-2.83zM11 5.38c-.77 0-1.38-.61-1.38-1.38c0-.77.61-1.38 1.38-1.38c.77 0 1.38.61 1.38 1.38c0 .77-.61 1.38-1.38 1.38z" fill="currentColor"></svg:path>`,
})
export class OcticonKeyIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
