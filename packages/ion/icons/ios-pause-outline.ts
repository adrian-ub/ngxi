import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPauseOutlineIcon],svg[ion-ios-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M191 112v288h-47V112h47m16-16h-79v320h79V96z" fill="currentColor"></svg:path><svg:path d="M368 112v288h-47V112h47m16-16h-79v320h79V96z" fill="currentColor"></svg:path>`,
})
export class IonIosPauseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
