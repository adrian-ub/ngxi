import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsAdvertisingIcon],svg[flat-color-icons-advertising-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="M17.4 33H15v-4h4l.4 1.5c.3 1.3-.7 2.5-2 2.5M37 36s-11.8-7-18-7V15c5.8 0 18-7 18-7z"></svg:path><svg:g fill="#283593"><svg:circle cx="9" cy="22" r="5"></svg:circle><svg:path d="M40 19h-3v6h3c1.7 0 3-1.3 3-3s-1.3-3-3-3M18.6 41.2c-.9.6-2.5 1.2-4.6 1.4c-.6.1-1.2-.3-1.4-1L8.2 27.9S17 21.7 17 29c0 5.5 1.5 8.4 2.2 9.5c.5.7.5 1.6 0 2.3c-.2.2-.4.3-.6.4"></svg:path></svg:g><svg:path fill="#3F51B5" d="M9 29h10V15H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2"></svg:path><svg:path fill="#42A5F5" d="M38 38c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v28c0 1.1-.9 2-2 2"></svg:path>`,
})
export class FlatColorIconsAdvertisingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
