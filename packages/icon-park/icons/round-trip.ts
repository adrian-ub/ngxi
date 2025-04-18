import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRoundTripIcon],svg[icon-park-round-trip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M9.00056 24L5.00023 20C5.00023 20 3.60071 24.7277 3.92442 27.5782C4.24812 30.4286 7.27333 32.5742 10 31C12.7267 29.4258 44.0006 9.99999 44.0006 9.99999L35.0006 7.99999L9.00056 24Z"></svg:path><svg:path d="M26 13.0001L10.7979 11.3847L8 13.0001L14.9999 20"></svg:path><svg:path d="M29 44L25 39H42V35"></svg:path><svg:path d="M32 28L36 33H19V37"></svg:path></svg:g>`,
})
export class IconParkRoundTripIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
