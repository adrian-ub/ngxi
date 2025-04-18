import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoArrowUpIcon],svg[fontisto-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.934 15.966L22.9 16L12.267 5.392L1.633 16l-.034-.034v-5.319L12.266 0l10.666 10.647z"></svg:path><svg:path fill="currentColor" d="M10.49 24V5.334h3.555V24z"></svg:path>`,
})
export class FontistoArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
