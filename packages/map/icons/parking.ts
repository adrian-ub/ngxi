import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapParkingIcon],svg[map-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.617 0H7v50h11V34h11.617c12.464 0 17.294-9.871 17.294-18.02C46.911 7.873 42.081 0 29.617 0m-3.013 24H18V9h8.604c5.113 0 9.668 1.128 9.668 7.487C36.271 22.885 31.717 24 26.604 24"></svg:path>`,
})
export class MapParkingIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
