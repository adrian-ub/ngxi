import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsIt45Icon],svg[circle-flags-it-45-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="circleFlagsIt450" width="512" height="512" x="0" y="0" maskUnits="userSpaceOnUse"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask></svg:defs><svg:g mask="url(#circleFlagsIt450)"><svg:path fill="#eee" d="M0 0h512v512H0z"></svg:path><svg:path fill="#496e2d" d="M136 128v240h240V128zm16 224V247l203 105zm208-161a166 166 0 0 1-104 0a166 166 0 0 0-104 0v-47h208z"></svg:path><svg:path fill="#d80027" d="M136 384h240v16H136z"></svg:path></svg:g>`,
})
export class CircleFlagsIt45Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
