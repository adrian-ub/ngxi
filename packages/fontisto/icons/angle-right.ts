import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAngleRightIcon],svg[fontisto-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.8 21.57L7.222 24L19.2 12L7.222 0L4.8 2.43L14.347 12z"></svg:path>`,
})
export class FontistoAngleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
