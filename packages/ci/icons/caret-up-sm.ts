import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCaretUpSmIcon],svg[ci-caret-up-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 13l3-3l3 3"></svg:path>`,
})
export class CiCaretUpSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
