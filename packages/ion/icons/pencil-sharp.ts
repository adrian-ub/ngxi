import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPencilSharpIcon],svg[ion-pencil-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M103 464H48v-55L358.14 98.09l55.77 55.78zm322.72-322L370 86.28l31.66-30.66C406.55 50.7 414.05 48 421 48a25.9 25.9 0 0 1 18.42 7.62l17 17A25.87 25.87 0 0 1 464 91c0 7-2.71 14.45-7.62 19.36Zm-7.52-70.83"></svg:path>`,
})
export class IonPencilSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
