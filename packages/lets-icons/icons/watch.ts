import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWatchIcon],svg[lets-icons-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.5 7l.407-3.255A.85.85 0 0 1 9.75 3h4.5c.428 0 .79.32.843.745L15.5 7m-7 10l.407 3.255A.85.85 0 0 0 9.75 21h4.5a.85.85 0 0 0 .843-.745L15.5 17"></svg:path><svg:path fill="currentColor" d="M18.15 11h-.65v2h.65c.47 0 .85-.38.85-.85v-.3a.85.85 0 0 0-.85-.85"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m12 12l-1-3m1 3l2.5 1"></svg:path></svg:g>`,
})
export class LetsIconsWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
