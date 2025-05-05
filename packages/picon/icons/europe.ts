import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEuropeIcon],svg[picon-europe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m2-2l1 2H1l1 2l2-2l1 2V4l2 1v1H1c4 4 9-1 5-5M2 1l1 .5v-1"></svg:path>`,
})
export class PiconEuropeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
