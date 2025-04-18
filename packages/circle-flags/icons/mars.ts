import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMarsIcon],svg[circle-flags-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMars0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMars0)"><svg:path fill="#6da544" d="M170 0h172l32 256l-32 256H170l-32-256Z"></svg:path><svg:path fill="#d80027" d="M0 0h170v512H0Z"></svg:path><svg:path fill="#0052b4" d="M342 0h170v512H342Z"></svg:path></svg:g>`,
})
export class CircleFlagsMarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
