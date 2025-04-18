import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSimCardIcon],svg[icon-park-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M10 44H38C39.1046 44 40 43.1046 40 42V14.8847C40 14.3212 39.7623 13.7839 39.3453 13.4049L29.5721 4.52012C29.204 4.18544 28.7243 4 28.2268 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:circle cx="17" cy="14" r="3" fill="#000"></svg:circle><svg:rect width="16" height="14" x="16" y="23" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect></svg:g>`,
})
export class IconParkSimCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
