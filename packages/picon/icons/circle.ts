import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCircleIcon],svg[picon-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5.25 8-5.25 8 0S0 9.25 0 4m7 0c0-4-6-4-6 0s6 4 6 0"></svg:path>`,
})
export class PiconCircleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
