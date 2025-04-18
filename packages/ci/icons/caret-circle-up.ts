import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCaretCircleUpIcon],svg[ci-caret-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 13l3-3l3 3m6-1a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiCaretCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
