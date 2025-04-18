import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionAddCircleSharpIcon],svg[ion-add-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m96 224h-80v80h-32v-80h-80v-32h80v-80h32v80h80Z"></svg:path>`,
})
export class IonAddCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
