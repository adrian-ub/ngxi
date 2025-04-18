import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBagCarryOnIcon],svg[mdi-bag-carry-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.6 21.4c.4.4.8.6 1.4.6s1-.2 1.4-.6s.6-.8.6-1.4s-.2-1-.6-1.4s-.9-.6-1.4-.6s-1 .2-1.4.6s-.6.8-.6 1.4s.2 1 .6 1.4M6 19c0 .5.2 1 .6 1.4s.9.6 1.4.6V7c-.5 0-1 .2-1.4.6S6 8.5 6 9zM16 2h-4c0 .5.2 1 .6 1.4s.9.6 1.4.6v3H9v14h4.2c-.2-.5-.2-.8-.2-1q0-1.2.9-2.1T16 17z"></svg:path>`,
})
export class MdiBagCarryOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
