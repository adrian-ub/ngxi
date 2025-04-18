import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoToggleOnIcon],svg[fontisto-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 11.617a6.82 6.82 0 0 1-6.813 6.817H6.816a6.817 6.817 0 1 1 0-13.634h10.366a6.82 6.82 0 0 1 6.817 6.813zm-6.817-4.545a4.542 4.542 0 1 0 0 9.084a4.542 4.542 0 0 0 .002-9.084z"></svg:path>`,
})
export class FontistoToggleOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
