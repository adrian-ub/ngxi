import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAccessibilityIcon],svg[grommet-icons-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h7v6l-4 7M20 8h-7v6l4 7M12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1 3h2v5h-2z"></svg:path>`,
})
export class GrommetIconsAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
