import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationDieFourIcon],svg[foundation-die-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.921 23.292a7.44 7.44 0 0 0-7.213-7.264v-.011H23.292v.008a7.443 7.443 0 0 0-7.267 7.267h-.009v53.416h.009a7.44 7.44 0 0 0 7.267 7.267v.008h53.416v-.009a7.44 7.44 0 0 0 7.267-7.267h.009V23.292zM32.99 73.676a7.035 7.035 0 1 1 .001-14.069a7.035 7.035 0 0 1-.001 14.069m0-33.606a7.035 7.035 0 1 1 .001-14.069a7.035 7.035 0 0 1-.001 14.069m34.019 33.909a7.033 7.033 0 0 1-7.034-7.033a7.034 7.034 0 1 1 14.069 0a7.034 7.034 0 0 1-7.035 7.033m0-33.909a7.033 7.033 0 0 1-7.034-7.033a7.034 7.034 0 1 1 14.069 0a7.034 7.034 0 0 1-7.035 7.033"></svg:path>`,
})
export class FoundationDieFourIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
