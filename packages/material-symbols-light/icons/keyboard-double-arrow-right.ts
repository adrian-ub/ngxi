import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardDoubleArrowRightIcon],svg[material-symbols-light-keyboard-double-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.537 12L5.942 7.4l.708-.708L11.958 12L6.65 17.308l-.708-.708zm6.1 0l-4.595-4.6l.708-.708L18.058 12l-5.308 5.308l-.708-.708z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardDoubleArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
