import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyBonePetDogBoneFoodSnackIcon],svg[streamline-nature-ecology-bone-pet-dog-bone-food-snack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 2.5a2 2 0 0 0-4 0a2 2 0 0 0 .59 1.41L3.91 8.09A2 2 0 0 0 2.5 7.5a2 2 0 0 0 0 4a2 2 0 0 0 4 0a2 2 0 0 0-.59-1.41l4.18-4.18a2 2 0 0 0 1.41.59a2 2 0 0 0 0-4Z"></svg:path>`,
})
export class StreamlineNatureEcologyBonePetDogBoneFoodSnackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
