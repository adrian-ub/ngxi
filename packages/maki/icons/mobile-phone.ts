import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMobilePhoneIcon],svg[maki-mobile-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v-.5a.5.5 0 0 0-1 0V2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M6 13H5v-1h1Zm0-2H5v-1h1Zm0-2H5V8h1Zm2 4H7v-1h1Zm0-2H7v-1h1Zm0-2H7V8h1Zm2 4H9v-1h1Zm0-2H9v-1h1Zm0-2H9V8h1Zm0-2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5Z"></svg:path>`,
})
export class MakiMobilePhoneIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
