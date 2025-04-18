import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNorthernCyprusIcon],svg[circle-flags-northern-cyprus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNorthernCyprus0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNorthernCyprus0)"><svg:path fill="#eee" d="M0 0v48l32 24L0 96v320l32 24l-32 24v48h512v-48l-32-24l32-24V96l-32-24l32-24V0Z"></svg:path><svg:path fill="#d80027" d="M0 464h512v-48H0ZM0 48v48h512V48Zm270 255v-94l55 76l-89-29l89-29z"></svg:path><svg:path fill="#d80027" d="M185 167a89 89 0 1 0 62 153a72 72 0 0 1-34 8a72 72 0 1 1 34-136a89 89 0 0 0-62-25"></svg:path></svg:g>`,
})
export class CircleFlagsNorthernCyprusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
