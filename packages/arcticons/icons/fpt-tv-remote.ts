import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFptTvRemoteIcon],svg[arcticons-fpt-tv-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="14.21" cy="33.664" r="5.435"></svg:circle><svg:circle cx="14.21" cy="33.664" r="2.471"></svg:circle><svg:path d="M24.586 20.323a2.965 2.965 0 0 1 2.965 2.965m-2.718-4.694a4.447 4.447 0 0 1 4.447 4.447M5.626 31.194l9.218-9.219a3.944 3.944 0 0 1 5.59 0l5.59 5.59a3.944 3.944 0 0 1 0 5.591L16.682 42.5"></svg:path><svg:path d="M10.751 26.037V15.382A9.86 9.86 0 0 1 20.633 5.5h11.86a9.86 9.86 0 0 1 9.881 9.882v11.859a9.86 9.86 0 0 1-9.882 9.882H21.907"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.645 26.747l1.398 1.397"></svg:path>`,
})
export class ArcticonsFptTvRemoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
