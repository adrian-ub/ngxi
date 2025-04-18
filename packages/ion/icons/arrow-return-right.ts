import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowReturnRightIcon],svg[ion-arrow-return-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 192l-128 96v-64H128v128h248c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8V168c0-4.4 3.6-8 8-8h248V96l128 96z" fill="currentColor"></svg:path>`,
})
export class IonArrowReturnRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
