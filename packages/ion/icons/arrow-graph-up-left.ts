import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowGraphUpLeftIcon],svg[ion-arrow-graph-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 128l-61.8 61.8 93.5 98.2 107-106.7L480 384 330.7 256l-107 112L92.8 227.2 32 288V128z" fill="currentColor"></svg:path>`,
})
export class IonArrowGraphUpLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
