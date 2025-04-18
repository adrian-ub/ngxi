import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiIphoneIcon],svg[flat-ui-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2C3E50" fill-rule="evenodd" d="M5 0h50a5 5 0 0 1 5 5v90a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5" clip-rule="evenodd"></svg:path><svg:path fill="#35495E" fill-rule="evenodd" d="M5 11h50v73H5zm25 77a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7" clip-rule="evenodd"></svg:path>`,
})
export class FlatUiIphoneIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
