import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMultiplyIcon],svg[whh-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m701.393 511l303 304q20 20 20 47.5t-20 46.5l-94 94q-19 20-47 20t-47-20l-304-303l-304 303q-19 20-47 20t-47-20l-94-94q-20-19-20-46.5t20-47.5l303-304l-303-303q-20-20-20-47.5t20-47.5l94-94q19-19 47-19t47 19l304 304l304-304q19-19 47-19t47 19l94 94q20 20 20 47.5t-20 47.5z"></svg:path>`,
})
export class WhhMultiplyIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
