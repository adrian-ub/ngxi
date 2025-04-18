import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionSocialWindowsOutlineIcon],svg[ion-social-windows-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 281v180.5l-216-31.3V281h216m16-16H232v179l248 36V265z" fill="currentColor"></svg:path><svg:path d="M200 281v142.2l-152-22V281h152m16-16H32v150l184 26.7V265z" fill="currentColor"></svg:path><svg:path d="M464 50v183H248V81.3l216-30.9M480 32L232 67.4V249h248V32z" fill="currentColor"></svg:path><svg:path d="M200 88v145H48V109.9l152-21.7m16-18.5L32 96v153h184V69.7z" fill="currentColor"></svg:path>`,
})
export class IonSocialWindowsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
