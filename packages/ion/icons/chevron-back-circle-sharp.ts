import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionChevronBackCircleSharpIcon],svg[ion-chevron-back-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m62.63 304L296 374.63L177.37 256L296 137.37L318.63 160l-96 96Z"></svg:path>`,
})
export class IonChevronBackCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
