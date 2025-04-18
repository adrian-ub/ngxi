import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextVerticalAlignmentIcon],svg[carbon-text-vertical-alignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28h14v2H16zm0-5h14v2H16zm-5.154 7H13L8.64 20H6.36L2 30h2.154l.8-2h5.092zm-5.092-4L7.5 21.635L9.246 26zM2 15h28v2H2zm14-8h14v2H16zm0-5h14v2H16zm-5.154 10H13L8.64 2H6.36L2 12h2.154l.8-2h5.092zM5.754 8L7.5 3.635L9.246 8z"></svg:path>`,
})
export class CarbonTextVerticalAlignmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
