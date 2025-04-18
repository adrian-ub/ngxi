import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoToggleOffIcon],svg[fontisto-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 11.617A6.82 6.82 0 0 1 6.813 4.8h10.371a6.817 6.817 0 1 1 0 13.634H6.818a6.82 6.82 0 0 1-6.817-6.813zm6.817 4.543a4.543 4.543 0 1 0-.003-9.085a4.543 4.543 0 0 0 .001 9.085h.003z"></svg:path>`,
})
export class FontistoToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
