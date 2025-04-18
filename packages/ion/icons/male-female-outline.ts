import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMaleFemaleOutlineIcon],svg[ion-male-female-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="216" cy="200" r="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M216 352v128m56-64H160m272-304V32h-80m-16.72 96.72L432 32"></svg:path>`,
})
export class IonMaleFemaleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
