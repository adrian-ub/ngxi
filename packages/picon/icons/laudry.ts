import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLaudryIcon],svg[picon-laudry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4c0-4-6-4-6 0s6 4 6 0M0 0h8v8H0m2-3c0 2 5 1 4-1"></svg:path>`,
})
export class PiconLaudryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
