import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiProhibitedIcon],svg[openmoji-prohibited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="26" fill="#fff"></svg:circle><svg:path fill="#ea5a47" d="M36 7C19.98 7 7 19.98 7 36s12.98 29 29 29s29-12.98 29-29S52.02 7 36 7M10.79 36.27c0-5.075 3.417-12.69 6.202-16.49l35.2 35.27c-3.805 2.784-10.93 5.904-16.01 5.904c-12.7 0-25.39-11.98-25.39-24.68zm44.87 15.18L20.6 16.32c3.805-2.784 10.77-5.441 15.84-5.441c12.7 0 24.68 12.25 24.68 24.95c0 5.075-2.686 11.81-5.47 15.62z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="30"></svg:circle><svg:path d="M55.66 51.44A24.99 24.99 0 0 0 20.6 16.31zM16.99 19.77a24.99 24.99 0 0 0 35.2 35.27z"></svg:path></svg:g>`,
})
export class OpenmojiProhibitedIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
