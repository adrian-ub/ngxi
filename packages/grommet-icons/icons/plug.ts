import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsPlugIcon],svg[grommet-icons-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M15 6V1m-3 23v-9M9 6V1M6 6h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></svg:path>`,
})
export class GrommetIconsPlugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
