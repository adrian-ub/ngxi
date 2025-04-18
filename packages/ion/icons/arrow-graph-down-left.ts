import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowGraphDownLeftIcon],svg[ion-arrow-graph-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 384V224l60.8 60.8L223.7 144l107 112L480 128 330.7 330.7 223.7 224l-93.5 98.2L192 384z" fill="currentColor"></svg:path>`,
})
export class IonArrowGraphDownLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
