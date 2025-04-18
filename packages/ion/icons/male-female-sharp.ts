import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMaleFemaleSharpIcon],svg[ion-male-female-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330 16v44h42.89l-37.1 37.09A157.67 157.67 0 0 0 216 42c-87.12 0-158 70.88-158 158c0 79.66 59.26 145.72 136 156.46V394h-50v44h50v58h44v-58h50v-44h-50v-37.54c76.74-10.74 136-76.8 136-156.46a157.2 157.2 0 0 0-14-64.93l44-44V134h44V16ZM216 314a114 114 0 1 1 114-114a114.13 114.13 0 0 1-114 114"></svg:path>`,
})
export class IonMaleFemaleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
