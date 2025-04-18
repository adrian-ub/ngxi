import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsThreeDIcon],svg[grommet-icons-three-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M2 5.5v13l10 4l10-4v-13l-10-4zM13 12h5v5M2 5.5l10 4l10-4M6 14s6 6.5 12-2"></svg:path>`,
})
export class GrommetIconsThreeDIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
