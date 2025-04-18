import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLetterSpacingIcon],svg[tabler-letter-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12V6.5a2.5 2.5 0 0 1 5 0V12m0-4H5m8-4l3 8l3-8M5 18h14m-2 2l2-2l-2-2M7 16l-2 2l2 2"></svg:path>`,
})
export class TablerLetterSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
