import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleTaiChiLightIcon],svg[ph-person-simple-tai-chi-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 78a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m94 74a6 6 0 0 1-6 6h-82v30l52.36 22.45A6 6 0 0 1 190 168v48a6 6 0 0 1-12 0v-44l-48.84-21L52 220.46a6 6 0 0 1-8-8.92l78-70.21V110H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhPersonSimpleTaiChiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
