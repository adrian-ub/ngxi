import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNowplaying4droidIcon],svg[arcticons-nowplaying4droid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.916 5.5v30.4m4.8-16.2h-16.2m16.2 7.6h-16.2m3.8-15.2v30.4m25.169-10.679l-9.766-8.189V40.01z"></svg:path>`,
})
export class ArcticonsNowplaying4droidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
