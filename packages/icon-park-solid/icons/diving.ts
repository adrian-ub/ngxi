import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDivingIcon],svg[icon-park-solid-diving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M31.8 6H10.2C7.88 6 6 7.79 6 10v8h11c0-2 1.5-4 4-4s4 2 4 4h11v-8c0-2.21-1.88-4-4.2-4"></svg:path><svg:path d="M16 24c0 1.491 1.25 6 5 6s5-4.509 5-6M42 6v32c0 4-3 6-6 6s-6-2-6-6v-2"></svg:path></svg:g>`,
})
export class IconParkSolidDivingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
