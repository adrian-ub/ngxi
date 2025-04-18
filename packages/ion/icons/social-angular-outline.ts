import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionSocialAngularOutlineIcon],svg[ion-social-angular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.982 64l187.967 69.105-39.17 230.389-148.881 79.949-148.812-80.051L68.031 133.11 255.982 64m-.001-32L32 112l46.12 272L256 480l177.75-96L480 112 255.981 32z" fill="currentColor"></svg:path><svg:path d="M344 352h40L256 72 128 352h40l26.584-56h122.827L344 352zm-130.427-96l42.419-89.356L298.419 256h-84.846z" fill="currentColor"></svg:path>`,
})
export class IonSocialAngularOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
