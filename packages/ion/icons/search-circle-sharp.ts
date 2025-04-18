import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionSearchCircleSharpIcon],svg[ion-search-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64m80 294.63l-54.15-54.15a88.08 88.08 0 1 1 22.63-22.63L358.63 336Z"></svg:path><svg:circle cx="232" cy="232" r="56" fill="currentColor"></svg:circle>`,
})
export class IonSearchCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
