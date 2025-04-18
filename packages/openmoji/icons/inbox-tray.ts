import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiInboxTrayIcon],svg[openmoji-inbox-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#EA5A47" d="M29.507 22.43h1.589a1 1 0 0 0 .999-.999v-4.41a1 1 0 0 1 1-1h4.33a1 1 0 0 1 1 1v4.41a1 1 0 0 0 1 1h1.578a1 1 0 0 1 .816 1.577l-5.748 8.12a1 1 0 0 1-1.632 0l-5.748-8.12a1 1 0 0 1 .816-1.577"></svg:path><svg:path fill="#d0cfce" d="M60.736 42.189v10.74a3.095 3.095 0 0 1-3.092 3.092H13.736a3 3 0 0 1-3-3V42.096a3 3 0 0 1 3-3h5.406c1.12 0 2.228.523 2.787 1.494a2.9 2.9 0 0 0 2.515 1.464l11.287.01l11.286-.01c1.072 0 2.01-.587 2.515-1.464c.56-.97 1.667-1.494 2.787-1.494h5.325c1.7 0 3.092 1.382 3.092 3.093"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M29.507 22.43h1.589a1 1 0 0 0 .999-.999v-4.41a1 1 0 0 1 1-1h4.33a1 1 0 0 1 1 1v4.41a1 1 0 0 0 1 1h1.578a1 1 0 0 1 .816 1.577l-5.748 8.12a1 1 0 0 1-1.632 0l-5.748-8.12a1 1 0 0 1 .816-1.577z"></svg:path><svg:path stroke-linejoin="round" d="M60.736 42.189v10.74a3.095 3.095 0 0 1-3.092 3.092H13.736a3 3 0 0 1-3-3V42.096a3 3 0 0 1 3-3h5.406c1.12 0 2.228.523 2.787 1.494a2.9 2.9 0 0 0 2.515 1.464l11.287.01l11.286-.01c1.072 0 2.01-.587 2.515-1.464c.56-.97 1.667-1.494 2.787-1.494h5.325c1.7 0 3.092 1.382 3.092 3.093"></svg:path></svg:g>`,
})
export class OpenmojiInboxTrayIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
