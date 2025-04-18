import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainHaxeIcon],svg[devicon-plain-haxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h32.3L64 16L96.3 0H128v32.6L111.8 64L128 95.8V128H95.2L64 112.1L32.6 128H0V94.7L15.7 64L0 31.8z"></svg:path>`,
})
export class DeviconPlainHaxeIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
