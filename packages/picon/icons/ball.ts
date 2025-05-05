import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBallIcon],svg[picon-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8q1-3 4-4q-4 0-4 4c-5.5 0-5-8 0-8Q3 3 0 4q4 0 4-4c5.5 0 5 8 0 8"></svg:path>`,
})
export class PiconBallIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
