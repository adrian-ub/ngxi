import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBriefcase01Icon],svg[hugeicons-briefcase-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 13.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034h1.334c.31 0 .465 0 .592.034a1 1 0 0 1 .707.707c.034.127.034.282.034.592V14a2 2 0 1 1-4 0z"></svg:path><svg:path d="M13.9 13.5h1.183c1.284 0 1.926 0 2.473-.116c1.582-.335 2.873-1.363 3.438-2.738c.195-.476.275-1.05.434-2.2c.06-.432.09-.648.061-.824c-.084-.514-.496-.936-1.05-1.074c-.192-.048-.433-.048-.915-.048H4.476c-.482 0-.724 0-.914.048c-.555.138-.967.56-1.051 1.074c-.029.176.001.392.061.824c.16 1.15.239 1.724.434 2.2c.565 1.375 1.856 2.403 3.438 2.738c.547.116 1.19.116 2.473.116H10.1"></svg:path><svg:path d="M3.5 11.5v2c0 3.771 0 5.657 1.106 6.828s2.888 1.172 6.45 1.172h1.888c3.562 0 5.343 0 6.45-1.172C20.5 19.157 20.5 17.271 20.5 13.5v-2m-5-5l-.077-.353c-.385-1.76-.578-2.64-1.036-3.144c-.458-.503-1.067-.503-2.285-.503h-.204c-1.218 0-1.827 0-2.285.503c-.458.504-.65 1.384-1.036 3.144L8.5 6.5"></svg:path></svg:g>`,
})
export class HugeiconsBriefcase01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
