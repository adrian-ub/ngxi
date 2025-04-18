import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCaretDownSharpIcon],svg[ion-caret-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 144l192 224l192-224z"></svg:path>`,
})
export class IonCaretDownSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
