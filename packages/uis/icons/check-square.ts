import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisCheckSquareIcon],svg[uis-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-3.3 7.3l-6.8 6.8c-.4.4-1 .4-1.4 0l-3.2-3.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.5 2.5l6.1-6.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"></svg:path>`,
})
export class UisCheckSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
