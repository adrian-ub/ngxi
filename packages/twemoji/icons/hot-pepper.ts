import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiHotPepperIcon],svg[twemoji-hot-pepper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DA2F47" d="M4.042 27.916c4.89.551 9.458-1.625 13.471-5.946c4.812-5.182 5-13 5-14s11.31-3.056 11 5c-.43 11.196-7.43 20.946-19.917 21.916c-5.982.465-9.679-.928-11.387-2.345c-2.69-2.231-.751-4.916 1.833-4.625"></svg:path><svg:path fill="#77B255" d="M30.545 6.246c.204-1.644.079-3.754-.747-4.853c-1.111-1.479-4.431-.765-3.569.113c.96.979 2.455 2.254 2.401 4.151l-.13-.032c-3.856-.869-6.721 1.405-7.167 2.958c-.782 2.722 4.065.568 4.68 1.762c1.82 3.53 3.903.155 4.403 1.28s4.097 4.303 4.097.636c0-3.01-1.192-4.903-3.968-6.015"></svg:path>`,
})
export class TwemojiHotPepperIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
