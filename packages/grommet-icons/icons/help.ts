import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsHelpIcon],svg[grommet-icons-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 23a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-5v-3c0-2 1-2 3-3s3-2.842 3-5A6 6 0 1 0 6 7"></svg:path>`,
})
export class GrommetIconsHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
