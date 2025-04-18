import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiIpadIcon],svg[flat-ui-ipad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2C3E50" fill-rule="evenodd" d="M5 0h68a5 5 0 0 1 5 5v90a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5" clip-rule="evenodd"></svg:path><svg:path fill="#35495E" fill-rule="evenodd" d="M4.991 11v71h68V11zm34 76a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path>`,
})
export class FlatUiIpadIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
