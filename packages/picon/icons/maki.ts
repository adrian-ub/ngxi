import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMakiIcon],svg[picon-maki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.5L2 4l2-.5L6 4M2 3Q0 4 2 5h4q2-1 0-2m2 4Q4 9 0 7V3q4-2 8 0"></svg:path>`,
})
export class PiconMakiIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
