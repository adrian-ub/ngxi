import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCommaIcon],svg[picon-comma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7H3l1-1V5h1"></svg:path>`,
})
export class PiconCommaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
