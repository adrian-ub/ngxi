import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsBusinessContactIcon],svg[flat-color-icons-business-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#673AB7" d="M40 7H8c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h5v-1.3c-.6-.3-1-1-1-1.7c0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7V41h18v-1.3c-.6-.3-1-1-1-1.7c0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7V41h5c2.2 0 4-1.8 4-4V11c0-2.2-1.8-4-4-4"></svg:path><svg:g fill="#D1C4E9"><svg:circle cx="24" cy="18" r="4"></svg:circle><svg:path d="M31 28s-1.9-4-7-4s-7 4-7 4v2h14z"></svg:path></svg:g>`,
})
export class FlatColorIconsBusinessContactIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
