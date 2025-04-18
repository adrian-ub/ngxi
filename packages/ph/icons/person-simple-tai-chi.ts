import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleTaiChiIcon],svg[ph-person-simple-tai-chi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m96 72a8 8 0 0 1-8 8h-80v26.72l51.15 21.93A8 8 0 0 1 192 168v48a8 8 0 0 1-16 0v-42.72l-46.45-19.91L53.35 222a8 8 0 1 1-10.7-11.9L120 140.44V112H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPersonSimpleTaiChiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
