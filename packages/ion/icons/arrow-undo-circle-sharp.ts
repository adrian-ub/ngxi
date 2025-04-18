import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowUndoCircleSharpIcon],svg[ion-arrow-undo-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m-9.17 241.14V344L146 248l100.83-96v54.86c96.5 0 119.17 69 119.17 137.14c-27.85-35.57-52.48-54.86-119.17-54.86"></svg:path>`,
})
export class IonArrowUndoCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
