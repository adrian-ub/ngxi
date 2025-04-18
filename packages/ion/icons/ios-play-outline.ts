import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPlayOutlineIcon],svg[ion-ios-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M144 124.9L353.8 256 144 387.1V124.9M128 96v320l256-160L128 96z" fill="currentColor"></svg:path>`,
})
export class IonIosPlayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
