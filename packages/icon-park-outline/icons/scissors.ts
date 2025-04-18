import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineScissorsIcon],svg[icon-park-outline-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" rx="3"></svg:rect><svg:path d="M19 19c2 3 2 7 0 10m17-15L21 24l15 10"></svg:path><svg:circle cx="16" cy="16" r="4"></svg:circle><svg:circle cx="16" cy="32" r="4"></svg:circle></svg:g>`,
})
export class IconParkOutlineScissorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
