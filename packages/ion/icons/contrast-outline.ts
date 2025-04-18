import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionContrastOutlineIcon],svg[ion-contrast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48Z"></svg:path>`,
})
export class IonContrastOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
