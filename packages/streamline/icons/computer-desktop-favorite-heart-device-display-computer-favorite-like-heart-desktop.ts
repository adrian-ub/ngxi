import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopFavoriteHeartDeviceDisplayComputerFavoriteLikeHeartDesktopIcon],svg[streamline-computer-desktop-favorite-heart-device-display-computer-favorite-like-heart-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6 11l-1 2.5M8 11l1 2.5m-5 0h6M13 2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2"></svg:path><svg:path d="M7 4c1.17-2.59 3.5-1.29 3.5.65C10.5 7.2 7 8.5 7 8.5S3.5 7.2 3.5 4.6C3.5 2.66 5.83 1.36 7 4Z"></svg:path></svg:g>`,
})
export class StreamlineComputerDesktopFavoriteHeartDeviceDisplayComputerFavoriteLikeHeartDesktopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
