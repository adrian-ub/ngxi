import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdArrowDropdownCircleIcon],svg[ion-md-arrow-dropdown-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm0 272l-96-96h192l-96 96z" fill="currentColor"></svg:path>`,
})
export class IonMdArrowDropdownCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
