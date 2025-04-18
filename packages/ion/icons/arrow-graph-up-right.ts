import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowGraphUpRightIcon],svg[ion-arrow-graph-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M320 128l61.8 61.8-93.5 98.2-107-106.7L32 384l149.3-128 107 112 130.9-140.8L480 288V128z" fill="currentColor"></svg:path>`,
})
export class IonArrowGraphUpRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
