import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitMultiplyIcon],svg[uit-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.853 19.147L12.707 12l7.146-7.147a.5.5 0 0 0-.707-.707L12 11.293L4.853 4.147a.5.5 0 0 0-.707.707L11.293 12l-7.147 7.146a.5.5 0 1 0 .707.707L12 12.707l7.146 7.147a.5.5 0 0 0 .707 0a.5.5 0 0 0 0-.707"></svg:path>`,
})
export class UitMultiplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
