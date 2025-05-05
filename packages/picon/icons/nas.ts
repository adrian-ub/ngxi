import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNasIcon],svg[picon-nas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1c1-1 5-1 6 0c-1 1.5-5 1.5-6 0m0 1q3 2 6 0v1Q4 5 1 3m0 1q3 2 6 0v1Q4 7 1 5M0 8V7h4V6l1-1v2h3v1"></svg:path>`,
})
export class PiconNasIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
