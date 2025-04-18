import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTapeOptionIcon],svg[grommet-icons-tape-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 2h21v20H2V7m10 12a7 7 0 0 1-7-7m7 7a7 7 0 0 0 0-14H1m11 4c-1.655 0-3 1.345-3 3s1.345 3 3 3s3-1.345 3-3s-1.345-3-3-3Z"></svg:path>`,
})
export class GrommetIconsTapeOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
