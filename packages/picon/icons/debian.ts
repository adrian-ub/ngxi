import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDebianIcon],svg[picon-debian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8q-7-4-2-8q5-1 4 4q-4 2-2-2q-2 1-1 2q2 1 2-2q-3-3-4 2"></svg:path>`,
})
export class PiconDebianIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
