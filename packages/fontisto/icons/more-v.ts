import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMoreVIcon],svg[fontisto-more-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h5.219v5.219H0zm0 9.39h5.219v5.219H0zm0 9.391h5.219V24H0z"></svg:path>`,
})
export class FontistoMoreVIcon {
  readonly viewBox = input("0 0 5 24")
  readonly width = input("0.21em")
  readonly height = input("1em")
}
