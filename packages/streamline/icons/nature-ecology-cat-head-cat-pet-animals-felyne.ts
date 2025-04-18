import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyCatHeadCatPetAnimalsFelyneIcon],svg[streamline-nature-ecology-cat-head-cat-pet-animals-felyne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 10.25h1m-7 3l3.5-2m-3.5-3l4 1m2.98-6.97L12.87.77a.46.46 0 0 1 .46.11a.49.49 0 0 1 .16.45l-1.1 5.61c-.06-.15-.12-.31-.17-.47A5.75 5.75 0 0 0 7 2.25a5.75 5.75 0 0 0-5.22 4.22c-.05.17-.11.32-.17.48L.51 1.33A.49.49 0 0 1 .67.88a.46.46 0 0 1 .46-.11l5.39 1.51m1.98 10.8a6.7 6.7 0 0 1-3 0m8 .17l-3.5-2m3.5-3l-4 1"></svg:path>`,
})
export class StreamlineNatureEcologyCatHeadCatPetAnimalsFelyneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
