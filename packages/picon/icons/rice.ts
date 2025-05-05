import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRiceIcon],svg[picon-rice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3c0-4 6-4 6 0c-1-3-5-3-6 0m1 5l1-1Q0 6 0 3h8q0 3-3 4l1 1"></svg:path>`,
})
export class PiconRiceIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
