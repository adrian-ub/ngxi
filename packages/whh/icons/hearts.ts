import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHeartsIcon],svg[whh-hearts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.694 1024q0-20-17.5-43t-47-47t-68-52t-81-62.5t-85-74.5t-81-91.5t-68-109t-47-132T.694 256q0-106 75-181t181-75t181 75t75 181q0-106 75-181t181-75t181 75t75 181q0 82-17.5 156.5t-47 132t-68 109t-81 91.5t-85 74.5t-81 62.5t-68 52t-47 47t-17.5 43"></svg:path>`,
})
export class WhhHeartsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
