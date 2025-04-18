import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTinybitIcon],svg[arcticons-tinybit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 44.5l17.799-10.276V13.8L24 24.076z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.076L6.201 13.8L23.977 3.5l17.822 10.3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 44.5L6.201 34.224V13.8L24 24.076zm0-20.424l-4.603-2.658l4.597-2.663l4.609 2.663z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 29.358L19.397 26.7v-5.282L24 24.076zm0 0l4.603-2.658v-5.282L24 24.076z"></svg:path>`,
})
export class ArcticonsTinybitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
