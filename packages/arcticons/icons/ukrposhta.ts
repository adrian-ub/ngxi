import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUkrposhtaIcon],svg[arcticons-ukrposhta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.304 24.44c10.34-2.145 7.439-14.554-.177-14.554c-7.854 0-10.674 11.23-1.822 14.083l13.23 3.11L24.95 43.5s-9.611-13.065-12.436-17.67C6.804 16.52 13.748 4.545 24.961 4.5c12.567 0 17.54 14 8.383 21.83"></svg:path>`,
})
export class ArcticonsUkrposhtaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
