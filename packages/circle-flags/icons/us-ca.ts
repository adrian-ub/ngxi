import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsCaIcon],svg[circle-flags-us-ca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsCa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsCa0)"><svg:path fill="#eee" d="M0 0h512v416l-256 32L0 416Z"></svg:path><svg:path fill="#6da544" d="m396 280l-132-10l-140 14l-8 12h299z"></svg:path><svg:path fill="#584528" d="m389 273l-19-77l-55-31l-95-4l-75 27l-16 35l11 19l26 1l10-11l24-4l-12 31l-19 25l17 2l19-12l26-24l22 11l-13 17l26-2l9-16l-4-19l21 4l1 23l-14 8l1 6h26l34-30l27 16l-6 8l1 5h17l10-7zM84 340h178v32H84Z"></svg:path><svg:path fill="#d80027" d="M0 416h512v96H0Z"></svg:path><svg:path fill="#584528" d="M288 340h140v32H288Z"></svg:path><svg:path fill="#d80027" d="m71 182l69-50H55l69 50l-26-81z"></svg:path></svg:g>`,
})
export class CircleFlagsUsCaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
