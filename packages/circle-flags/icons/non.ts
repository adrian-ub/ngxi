import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNonIcon],svg[circle-flags-non-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNon0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNon0)"><svg:path fill="#eee" d="M16 16h480l16 16v480H32l-16-16Z"></svg:path><svg:path fill="#333" d="M0 0v512h32v-97c42-2 83-10 122-25l37 90l30-12l-37-89c38-18 73-41 103-70l68 69l23-23l-69-68c29-30 52-65 70-103l89 37l12-30l-90-37c15-39 23-80 25-122h97V0Zm256 32c46 0 88 14 123 37A368 368 0 0 1 69 379A224 224 0 0 1 256 32"></svg:path><svg:path fill="#333" d="M194 138a28 28 0 0 0-28 28H82a28 28 0 0 0 28 28a28 28 0 0 0 28 28a28 28 0 0 0 28 28h56a28 28 0 0 0 28-28a28 28 0 0 0 28-28a28 28 0 0 0 28-28h-84a28 28 0 0 0-28-28"></svg:path></svg:g>`,
})
export class CircleFlagsNonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
