import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPlusEmptyIcon],svg[ion-ios-plus-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 265H264v119h-17V265H128v-17h119V128h17v120h120v17z" fill="currentColor"></svg:path>`,
})
export class IonIosPlusEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
