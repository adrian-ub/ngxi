import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosRefreshEmptyIcon],svg[ion-ios-refresh-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 384.1c-70.7 0-128-57.3-128-128.1s57.3-128.1 128-128.1V84l96 64-96 55.7v-55.8c-59.6 0-108.1 48.5-108.1 108.1 0 59.6 48.5 108.1 108.1 108.1S364.1 316 364.1 256H384c0 71-57.3 128.1-128 128.1z" fill="currentColor"></svg:path>`,
})
export class IonIosRefreshEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
