import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsScIcon],svg[circle-flags-us-sc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsSc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsSc0)"><svg:path fill="#0052b4" d="M0 0h512v512H0Z"></svg:path><svg:circle cx="118" cy="118" r="54" fill="#eee"></svg:circle><svg:circle cx="104.5" cy="104.5" r="38.5" fill="#0052b4"></svg:circle><svg:path fill="#eee" d="m238 439l12-221h24l12 221z"></svg:path><svg:path fill="#eee" d="M292 220c26-11 36-19 76-18c-34-15-65-20-91 0c8-20 15-40 42-59c-46 8-61 24-65 51c-11-27-38-29-76-29c42 23 33 20 54 44c-27-4-58 8-88 42c41-22 61-15 88-11a76 76 0 0 0-35 72c30-38 26-27 65-61c15 34 34 42 41 73c8-31 0-65-15-77c30 12 57 20 72 42c-7-53-42-60-68-69"></svg:path></svg:g>`,
})
export class CircleFlagsUsScIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
