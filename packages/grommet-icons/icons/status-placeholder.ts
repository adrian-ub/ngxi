import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsStatusPlaceholderIcon],svg[grommet-icons-status-placeholder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="20" height="20" x="2" y="2" fill="none" stroke="currentColor" stroke-width="2" rx="2"></svg:rect>`,
})
export class GrommetIconsStatusPlaceholderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
