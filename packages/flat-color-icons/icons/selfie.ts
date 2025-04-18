import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsSelfieIcon],svg[flat-color-icons-selfie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFB74D" d="M32.9 22c0-.3.1-.7.1-1v-7c0-7.6-18-5-18 0v7c0 .3 0 .7.1 1z"></svg:path><svg:path fill="#37474F" d="M40 44H8c-2.2 0-4-1.8-4-4V26c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v14c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#BBDEFB" d="M7 26v14c0 .6.4 1 1 1h29c.6 0 1-.4 1-1V26c0-.6-.4-1-1-1H8c-.6 0-1 .4-1 1"></svg:path><svg:path fill="#78909C" d="M40 30h2v6h-2z"></svg:path><svg:path fill="#BF360C" d="M19 32h8v9h-8z"></svg:path><svg:path fill="#FF9800" d="M20.5 37.5h5V41h-5z"></svg:path><svg:path fill="#FFB74D" d="M27.5 32c0-3.8-9-2.5-9 0v3.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5z"></svg:path><svg:g fill="#784719"><svg:circle cx="28" cy="21" r="1"></svg:circle><svg:circle cx="20" cy="21" r="1"></svg:circle><svg:circle cx="25" cy="35.5" r=".5"></svg:circle><svg:circle cx="21" cy="35.5" r=".5"></svg:circle></svg:g><svg:path fill="#FF5722" d="M23 27c-3 0-8 1.3-8 11l4 3v-6.5l6-3.5l2 2.5V41l4-3c0-2-.8-10-6-10l-.5-1zm-7-5v-3l12-7l4 5v5h6.8C38.3 15.8 36.1 6 28 6l-1-2h-3C18.5 4 10.7 6.8 9.2 22z"></svg:path>`,
})
export class FlatColorIconsSelfieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
