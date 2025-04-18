import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircledZeroWithSlashIcon],svg[openmoji-circled-zero-with-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="26.68" fill="#fff" fill-rule="evenodd"></svg:circle><svg:g fill="none" stroke="#000" stroke-linejoin="round"><svg:circle cx="36" cy="36" r="26.68" stroke-linecap="round" stroke-width="4.74"></svg:circle><svg:path stroke-width="4.74" d="m43.24 22.41l-15.01 26l-.327-.189"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" stroke-width="7.998" d="M36 51.209a8.327 8.327 0 0 1-8.329-8.329V29.11a8.33 8.33 0 0 1 16.658 0v13.77A8.327 8.327 0 0 1 36 51.21" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class OpenmojiCircledZeroWithSlashIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
