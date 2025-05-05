import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBadmintonIcon],svg[picon-badminton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3C1-1 7-1 6 3M2 4h4l1 4l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1"></svg:path>`,
})
export class PiconBadmintonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
