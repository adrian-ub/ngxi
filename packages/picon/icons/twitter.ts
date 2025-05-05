import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTwitterIcon],svg[picon-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2L4 3l3-3l-.5 1.5M2 6Q0 5 0 1l3 2q0-5 4-.5Q8 8 0 8"></svg:path>`,
})
export class PiconTwitterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
