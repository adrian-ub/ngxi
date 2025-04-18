import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWatchLightIcon],svg[lets-icons-watch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="5.5" stroke="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 7.5l.407-3.255A.85.85 0 0 1 9.75 3.5h4.5c.428 0 .79.32.843.745L15.5 7.5m-7 9l.407 3.255a.85.85 0 0 0 .843.745h4.5a.85.85 0 0 0 .843-.745L15.5 16.5"></svg:path><svg:path fill="currentColor" d="M18.15 11h-.65v2h.65c.47 0 .85-.38.85-.85v-.3a.85.85 0 0 0-.85-.85"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="m12 12l-2-2.5m2 2.5l2.5.5"></svg:path></svg:g>`,
})
export class LetsIconsWatchLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
