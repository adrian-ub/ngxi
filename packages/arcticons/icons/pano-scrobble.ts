import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPanoScrobbleIcon],svg[arcticons-pano-scrobble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.627 7.524C13.446 7.856 7.304 13.104 4.5 22.417m0 4.042s3.185 1.586 4.38-.45C20.983 5.37 25.563 19.762 30.05 11.854"></svg:path><svg:ellipse cx="21.96" cy="26.622" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.838" ry="12.46"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 20.444c-3.892-8.965-18.23 2.702-5.51 7.579c16.594 6.362-15.659 23.718-28.947 1.43c-1.595-2.677-3.169-1.152-4.543-1.502"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.223 20.697c-1.283-.39-1.639.27-2.219.902c1.25 1.803.578 3.532-1.233 3.984c-.344 4.21 1.21 7.556 3.552 7.046m5.261-16.767c-4.594 2.41-6.238-.287-8.624-1.7"></svg:path>`,
})
export class ArcticonsPanoScrobbleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
