import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLogoHtml5Icon],svg[ion-logo-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 32l34.94 403.21L255.77 480L413 435.15L448 32Zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28l-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2Z"></svg:path>`,
})
export class IonLogoHtml5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
