import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPlusIcon],svg[ion-ios-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm128 217H264v119h-17V265H128v-17h119V128h17v120h120v17z" fill="currentColor"></svg:path>`,
})
export class IonIosPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
