import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCaretUpCircleSharpIcon],svg[ion-caret-up-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48M147.73 300L256 169.91L364.27 300Z"></svg:path>`,
})
export class IonCaretUpCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
