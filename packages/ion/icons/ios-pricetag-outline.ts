import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPricetagOutlineIcon],svg[ion-ios-pricetag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 32H304L48 320l160 160 256-288V32zm-16 152L208.125 456 72.062 320 311.587 48H448v136z" fill="currentColor"></svg:path><svg:path d="M368 160c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.355 32 32 32zm0-48c8.836 0 16 7.163 16 16s-7.164 16-16 16-16-7.163-16-16 7.164-16 16-16z" fill="currentColor"></svg:path>`,
})
export class IonIosPricetagOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
