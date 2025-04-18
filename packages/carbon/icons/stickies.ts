import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStickiesIcon],svg[carbon-stickies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 22V10c0-1.1-.9-2-2-2H12c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c.3 0 .5-.1.7-.3l7-7c.2-.2.3-.4.3-.7m-8 0h5.6L22 27.6zm6-2h-6c-1.1 0-2 .9-2 2v6h-8V10h16z"></svg:path><svg:path fill="currentColor" d="M4 22V4h16v2h2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h4v-2z"></svg:path>`,
})
export class CarbonStickiesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
