import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosSkipbackwardOutlineIcon],svg[ion-ios-skipbackward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 96v320h79V274.2L416 416V96L175 237.8V96H96zm79.6 160l7.6-4.4L400 124v264L183.1 260.4l-7.5-4.4zM112 112h47v288h-47V112z" fill="currentColor"></svg:path>`,
})
export class IonIosSkipbackwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
