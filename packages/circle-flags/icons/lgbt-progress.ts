import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLgbtProgressIcon],svg[circle-flags-lgbt-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLgbtProgress0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLgbtProgress0)"><svg:path fill="#9c27b0" d="m0 425l256-32l256 32v87H0Z"></svg:path><svg:path fill="#0052b4" d="m0 340l256-32l256 32v85H0Z"></svg:path><svg:path fill="#6da544" d="m0 255l256-32l256 32v85H0Z"></svg:path><svg:path fill="#ffda44" d="m0 170l256-32l256 32v85H0Z"></svg:path><svg:path fill="#ff9811" d="m0 85l256-32l256 32v85H0Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v85H0Z"></svg:path><svg:path fill="#333" d="M160 0H80l192 256L80 512h80l256-256Z"></svg:path><svg:path fill="#85693d" d="M80 0H0l192 256L0 512h80l256-256Z"></svg:path><svg:path fill="#338af3" d="M0 0v80l112 176L0 432v80l256-256Z"></svg:path><svg:path fill="#f5a9b8" d="M0 80v80l32 96l-32 96v80l176-176Z"></svg:path><svg:path fill="#eee" d="M0 160v192l96-96Z"></svg:path></svg:g>`,
})
export class CircleFlagsLgbtProgressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
