import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRugbyIcon],svg[picon-rugby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7q0-7 7-7l1 1q0 7-7 7m5-7Q1 1 1 6m1 1q5 0 5-5"></svg:path>`,
})
export class PiconRugbyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
