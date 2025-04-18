import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMinusAIcon],svg[fontisto-minus-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.8 13.2v-2.4H1.2v2.4h12z"></svg:path>`,
})
export class FontistoMinusAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
