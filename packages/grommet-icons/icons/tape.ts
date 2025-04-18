import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTapeIcon],svg[grommet-icons-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 2h20v20H2zm17 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0Zm-7-3c-1.655 0-3 1.345-3 3s1.345 3 3 3s3-1.345 3-3s-1.345-3-3-3Z"></svg:path>`,
})
export class GrommetIconsTapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
