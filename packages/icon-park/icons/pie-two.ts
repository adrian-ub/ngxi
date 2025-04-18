import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPieTwoIcon],svg[icon-park-pie-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C26.6264 4 29.2272 4.51732 31.6537 5.52241C34.0802 6.5275 36.285 8.00069 38.1421 9.85787C39.9993 11.715 41.4725 13.9198 42.4776 16.3463C43.4827 18.7728 44 21.3736 44 24L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
