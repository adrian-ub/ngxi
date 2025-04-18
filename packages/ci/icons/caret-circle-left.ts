import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCaretCircleLeftIcon],svg[ci-caret-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 15l-3-3l3-3m8 3a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiCaretCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
