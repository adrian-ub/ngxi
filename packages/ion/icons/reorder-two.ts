import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionReorderTwoIcon],svg[ion-reorder-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M118 304h276m-276-96h276"></svg:path>`,
})
export class IonReorderTwoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
