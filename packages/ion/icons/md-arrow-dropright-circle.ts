import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDroprightCircleIcon],svg[ion-md-arrow-dropright-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 464c114.875 0 208-93.125 208-208S370.875 48 256 48 48 141.125 48 256s93.125 208 208 208zm-32-112V160l96 96-96 96z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDroprightCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
