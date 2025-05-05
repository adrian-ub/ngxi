import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChiliIcon],svg[picon-chili-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2q1 4 6 5q-8 1-7-4m1-3v1L1 2"></svg:path>`,
})
export class PiconChiliIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
