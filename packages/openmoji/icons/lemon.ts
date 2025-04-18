import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLemonIcon],svg[openmoji-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiLemon0" d="M16.03 55.937a5.48 5.48 0 0 1-1.018-6.081c-4.257-8.348-1.675-20.26 6.954-28.89c8.63-8.63 20.542-11.21 28.89-6.954a5.48 5.48 0 0 1 6.175 1.11a5.48 5.48 0 0 1 1.11 6.175c4.266 8.357 1.675 20.26-6.954 28.89s-20.533 11.22-28.89 6.954a5.48 5.48 0 0 1-6.267-1.204"></svg:path></svg:defs><svg:path fill="#fcea2b" d="M16.03 55.937a5.48 5.48 0 0 1-1.018-6.081c-4.257-8.348-1.675-20.26 6.954-28.89c8.63-8.63 20.542-11.21 28.89-6.954a5.48 5.48 0 0 1 6.175 1.11a5.48 5.48 0 0 1 1.11 6.175c4.266 8.357 1.675 20.26-6.954 28.89s-20.533 11.22-28.89 6.954a5.48 5.48 0 0 1-6.267-1.204"></svg:path><svg:path fill="#f4aa41" d="M50.556 50.012C41.925 58.643 30.02 61.234 21.66 56.97c34.683 0 36.337-35.145 36.337-35.145c4.274 8.35 1.18 19.557-7.442 28.188"></svg:path><svg:path fill="#f4aa41" d="M30.454 59.988C27.178 59.988 20 57 20 57l-2.5-1.03h4.161c13.988 0 24.18-5.737 30.295-17.048c4.587-8.488 5.04-17.06 5.043-17.145l.177-3.755l1.713 3.347c4.464 8.723 1.47 20.244-7.626 29.35c-6 6-13.69 9.27-20.809 9.27m-3.525-2.302c7.453 1.35 16.268-1.729 22.92-8.38c7.086-7.095 10.257-16.001 8.6-23.313c-1.63 8.848-7.92 29.064-31.52 31.693"></svg:path><svg:path fill="#f4aa41" d="M56.961 14.9s1.827 4.824.968 7.235l-4.101-4.101zM16.826 56.208s4.396 1.942 6.637.707l-4.705-3.39z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiLemon0"></svg:use><svg:use href="#openmojiLemon0"></svg:use></svg:g>`,
})
export class OpenmojiLemonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
