import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderLifebuoyWaterLifeRingWheelyLifebeltKisbeeIcon],svg[streamline-travel-wayfinder-lifebuoy-water-life-ring-wheely-lifebelt-kisbee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 1.5L9.09 4.91M1.5 1.5l3.41 3.41M1.5 12.5l3.41-3.41m7.59 3.41L9.09 9.09"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:circle cx="7" cy="7" r="2.95"></svg:circle></svg:g>`,
})
export class StreamlineTravelWayfinderLifebuoyWaterLifeRingWheelyLifebeltKisbeeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
