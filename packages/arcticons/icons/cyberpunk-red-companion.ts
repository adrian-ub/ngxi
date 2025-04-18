import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCyberpunkRedCompanionIcon],svg[arcticons-cyberpunk-red-companion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.3v20.8l5 4.6h34V15.9l-5-4.6zm16.3 18.2h5.9m-5.9-11.9h5.9m-5.9 6h3.8m-3.8-6v11.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.4 29.5V17.6h1.9c3.3 0 5.9 2.7 5.9 5.9h0c0 3.3-2.7 5.9-5.9 5.9h-1.9zm-20.6 0V17.6h3.8c2.2 0 4 1.8 4 4s-1.8 4-4 4H9.8m4-.1l3.8 4"></svg:path>`,
})
export class ArcticonsCyberpunkRedCompanionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
