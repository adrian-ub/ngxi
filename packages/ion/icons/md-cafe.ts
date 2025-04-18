import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdCafeIcon],svg[ion-md-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 400h368v48H48z" fill="currentColor"></svg:path><svg:path d="M424 64H80v224c0 44 36 80 80 80h144c44 0 80-36 80-80v-64h40c22 0 40-18 40-40v-80c0-22-18-40-40-40zm0 112h-40v-64h40v64z" fill="currentColor"></svg:path>`,
})
export class IonMdCafeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
