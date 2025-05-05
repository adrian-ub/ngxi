import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBustIcon],svg[picon-bust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5C-1-.5 9-.5 5 5M1 8q3-4 6 0"></svg:path>`,
})
export class PiconBustIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
