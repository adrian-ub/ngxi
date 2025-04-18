import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDroprightIcon],svg[ion-md-arrow-dropright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 128l128 128-128 128z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDroprightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
