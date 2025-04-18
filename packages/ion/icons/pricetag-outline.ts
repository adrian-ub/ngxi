import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPricetagOutlineIcon],svg[ion-pricetag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M435.25 48h-122.9a14.46 14.46 0 0 0-10.2 4.2L56.45 297.9a28.85 28.85 0 0 0 0 40.7l117 117a28.85 28.85 0 0 0 40.7 0L459.75 210a14.46 14.46 0 0 0 4.2-10.2v-123a28.66 28.66 0 0 0-28.7-28.8"></svg:path><svg:path fill="currentColor" d="M384 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonPricetagOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
