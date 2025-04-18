import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBellIcon],svg[openmoji-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.61" cy="57.772" r="5" fill="#f1b31c" stroke="#f1b31c" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="#fcea2b" d="M56.105 56.783s-2.059-3.767-3.254-9.586c-1.352-6.584-1.88-15.515-2.246-19.414c-.775-8.248-6.716-15-15-15h-.5c-8.284 0-14.225 6.752-15 15c-.367 3.9-.894 12.83-2.246 19.414c-1.196 5.82-3.254 9.586-3.254 9.586z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="M30.105 13.283a5 5 0 0 1 10 0M40.087 60a5 5 0 0 1-8.966-.002"></svg:path><svg:path stroke-miterlimit="10" stroke-width="1.818" d="M56.105 56.783s-2.059-3.767-3.254-9.586c-1.352-6.584-1.88-15.515-2.246-19.414c-.775-8.248-6.716-15-15-15h-.5c-8.284 0-14.225 6.752-15 15c-.367 3.9-.894 12.83-2.246 19.414c-1.196 5.82-3.254 9.586-3.254 9.586z"></svg:path></svg:g>`,
})
export class OpenmojiBellIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
