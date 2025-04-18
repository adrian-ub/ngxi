import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsCircleSharpIcon],svg[ion-notifications-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M295.68 351.43v.57h.32Z"></svg:path><svg:path fill="none" d="M256 384c22.28 0 39.36-10.63 39.66-32H216c0 21.75 17.53 32 40 32m39.67-32h.33l-.32-.57c0 .19-.01.38-.01.57"></svg:path><svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 336c-22.48 0-40-10.25-40-32h80c-.3 21.37-17.71 32-40 32m112-48H144v-28l28-36v-32.3c0-40.41 15.82-75.35 56-84.27l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36Z"></svg:path>`,
})
export class IonNotificationsCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
