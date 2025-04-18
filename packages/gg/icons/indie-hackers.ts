import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggIndieHackersIcon],svg[gg-indie-hackers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h3v12H4zm6 0h3v4.5h4V6h3v12h-3v-4.5h-4V18h-3z"></svg:path>`,
})
export class GgIndieHackersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
