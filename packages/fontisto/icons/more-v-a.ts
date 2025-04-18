import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMoreVAIcon],svg[fontisto-more-v-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.217 12a2.608 2.608 0 1 1-5.216 0a2.608 2.608 0 0 1 5.216 0m0-9.392a2.608 2.608 0 1 1-5.216 0a2.608 2.608 0 0 1 5.216 0m0 18.783a2.608 2.608 0 1 1-5.216 0a2.608 2.608 0 0 1 5.216 0"></svg:path>`,
})
export class FontistoMoreVAIcon {
  readonly viewBox = input("0 0 5 24")
  readonly width = input("0.21em")
  readonly height = input("1em")
}
