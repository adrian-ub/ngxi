import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFlashIcon],svg[zmdi-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h213l-85 170h85L64 429V237H0z"></svg:path>`,
})
export class ZmdiFlashIcon {
  readonly viewBox = input("0 0 216 432")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
