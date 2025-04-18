import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsContactsIcon],svg[flat-color-icons-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF7043" d="M38 44H12V4h26c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#BF360C" d="M10 4h2v40h-2c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4"></svg:path><svg:g fill="#AB300B"><svg:circle cx="26" cy="20" r="4"></svg:circle><svg:path d="M33 30s-1.9-4-7-4s-7 4-7 4v2h14z"></svg:path></svg:g>`,
})
export class FlatColorIconsContactsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
