import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisArrowUpRightIcon],svg[uis-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6H7c-.6 0-1 .4-1 1s.4 1 1 1h7.6l-8.3 8.3c-.4.4-.4 1 0 1.4s1 .4 1.4 0L16 9.4V17c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
