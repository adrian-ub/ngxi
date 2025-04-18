import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMcIcon],svg[circle-flags-mc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMc0)"><svg:path fill="#eee" d="m0 256l258.2-43.3L512 256v256H0z"></svg:path><svg:path fill="#d80027" d="M0 0h512v256H0z"></svg:path></svg:g>`,
})
export class CircleFlagsMcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
