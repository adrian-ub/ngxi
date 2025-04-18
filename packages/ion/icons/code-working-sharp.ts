import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCodeWorkingSharpIcon],svg[ion-code-working-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="26" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="10"></svg:circle><svg:circle cx="346" cy="256" r="26" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="10"></svg:circle><svg:circle cx="166" cy="256" r="26" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="10"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="42" d="M160 368L32 256l128-112m192 224l128-112l-128-112"></svg:path>`,
})
export class IonCodeWorkingSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
