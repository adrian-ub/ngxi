import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPenFilledIcon],svg[ix-pen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ixPenFilled0" fill="currentColor" d="M426.667 373.333V416H0v-42.667zM186.019 91.314l96 95.999l-143.352 143.354h-96v-96zM277.333 0l96 96l-68.686 68.686l-96-96z"></svg:path></svg:defs><svg:use fill-rule="evenodd" href="#ixPenFilled0" transform="translate(42.667 53.333)"></svg:use>`,
})
export class IxPenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
