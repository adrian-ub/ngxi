import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHtmlIcon],svg[picon-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7l3 1l3-1l1-7H0m1 1h6v1H2.5L3 3h3.5L6 6H2V5h3V4H2"></svg:path>`,
})
export class PiconHtmlIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
