import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOathIcon],svg[token-branded-oath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fff"><svg:path fill-rule="evenodd" d="M10.234 9.324H8.322c-1.04.75-3.133 2.554-3.133 4.136v2.052C5.75 17.342 7.705 21 11.081 21h3.23c1.498-.574 4.5-2.17 4.5-3.984v-2.457c-.195-1.897-1.581-5.998-5.536-7.18h-2.71c-.56.175-1.79.695-2.238 1.459h2.214v1.119a3 3 0 0 0-.2.19c-.204.199-.476.471-.773.637h1.445c.579-.112 1.863-.555 2.354-1.168c.754.482 3.011 2.32 3.011 4.135v1.358c-.316 1.05-1.8 2.972-3.891 2.972h-1.654c-.803-.525-2.472-1.824-2.885-3.522c.02-.705.005-1.965 0-2.505a6.34 6.34 0 0 1 2.286-2.73m2.253-1.46h-.973v.974h.973z" clip-rule="evenodd"></svg:path><svg:path d="M12 11.27h-.487v3.065h.229v1.8H12zM11.513 3h.973v.486h-.973zm0 .973h.973v.486h-.973zm0 .973h.973v.486h-.973zm-.973.973h2.92v.486h-2.92zm-.486-.487h.486v.487h-.486zm3.405 0h.487v.487h-.487zm-1.946 1.46h.973v.486h-.973z"></svg:path></svg:g>`,
})
export class TokenBrandedOathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
