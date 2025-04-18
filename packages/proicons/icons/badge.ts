import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBadgeIcon],svg[proicons-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 3.75H8.75a5 5 0 0 0-5 5v6.5a5 5 0 0 0 5 5h6.5a5 5 0 0 0 5-5V12"></svg:path><svg:circle cx="18.25" cy="5.75" r="3"></svg:circle></svg:g>`,
})
export class ProiconsBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
