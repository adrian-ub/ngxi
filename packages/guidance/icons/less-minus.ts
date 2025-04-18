import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLessMinusIcon],svg[guidance-less-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 14.5h23v-.25l-.054-.27a10.1 10.1 0 0 1 0-3.96l.054-.27V9.5H.5v.25l.054.27a10.1 10.1 0 0 1 0 3.96l-.054.27z"></svg:path>`,
})
export class GuidanceLessMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
