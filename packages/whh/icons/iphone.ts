import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhIphoneIcon],svg[whh-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1024H128q-53 0-90.5-37.5T0 896V128q0-53 37.5-90.5T128 0h512q53 0 90.5 37.5T768 128v768q0 53-37.5 90.5T640 1024m-255.5-64q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5M704 128H64v640h640zM128 704V191h384z"></svg:path>`,
})
export class WhhIphoneIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
