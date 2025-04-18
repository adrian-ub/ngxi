import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHipaintIcon],svg[arcticons-hipaint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.557 35.104H16.168V42.5H7.065V25.422h14.802l11.389-5.12l-11.389-4.561H6.487V5.5h19.932c19.932.569 19.932 28.466 1.138 29.604"></svg:path>`,
})
export class ArcticonsHipaintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
