import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsLocationParkIcon],svg[zondicons-location-park-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.33 12.77A4 4 0 1 1 3 5.13V5a4 4 0 0 1 5.71-3.62a3.5 3.5 0 0 1 6.26 1.66a2.5 2.5 0 0 1 2 2.08a4 4 0 1 1-2.7 7.49A5 5 0 0 1 12 14.58V18l2 1v1H6v-1l2-1v-3zM5 10l3 3v-3z"></svg:path>`,
})
export class ZondiconsLocationParkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
