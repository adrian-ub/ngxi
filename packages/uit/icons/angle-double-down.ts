import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitAngleDoubleDownIcon],svg[uit-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.646 10.854a.5.5 0 0 0 .707 0l3.5-3.5a.5.5 0 0 0-.707-.708L12 9.793L8.853 6.647a.5.5 0 0 0-.707.707zm3.5 1.792L12 15.793l-3.147-3.146a.5.5 0 0 0-.707.707l3.5 3.5a.5.5 0 0 0 .707 0l3.5-3.5a.5.5 0 0 0-.707-.708"></svg:path>`,
})
export class UitAngleDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
