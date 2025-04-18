import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionChevronDownSharpIcon],svg[ion-chevron-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m112 184l144 144l144-144"></svg:path>`,
})
export class IonChevronDownSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
