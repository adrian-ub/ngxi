import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoArrowHIcon],svg[fontisto-arrow-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.235 13.234H4.765v3.494L0 11.964l4.765-4.765v3.494h14.47V7.199L24 11.964l-4.765 4.765z"></svg:path>`,
})
export class FontistoArrowHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
