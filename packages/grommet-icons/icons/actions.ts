import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsActionsIcon],svg[grommet-icons-actions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 17.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11Zm0-11V1m0 22v-5.5M1 12h5.5m11 0H23M4.438 4.438l4.125 4.125m6.874 6.874l4.126 4.126m0-15.125l-4.125 4.125m-6.876 6.874l-4.124 4.126"></svg:path>`,
})
export class GrommetIconsActionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
