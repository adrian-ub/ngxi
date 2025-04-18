import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLongerIcon],svg[ix-longer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 384h42.666V128h-42.666zm-192-128.64l84.693 85.76l30.293-30.293l-33.066-33.067H192v-43.947h-67.413l33.066-32.853l-30.293-30.293zm341.973-84.693l84.693 85.76l-84.693 84.693l-30.293-30.293l33.066-33.067H320v-43.947h67.413l-33.066-32.853z"></svg:path>`,
})
export class IxLongerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
