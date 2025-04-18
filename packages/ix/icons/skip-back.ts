import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSkipBackIcon],svg[ix-skip-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 128v256h42.667V128zm256 0v256L170.667 256zm-42.667 75.328L253.568 256l87.765 52.65z"></svg:path>`,
})
export class IxSkipBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
