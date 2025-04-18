import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQrKbankShopIcon],svg[arcticons-qr-kbank-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.665 5.5v8.335m6.7-7.834v7.834m13.39-7.834v7.834m-6.69-7.834l-.005 7.834c-.006 1.939-1.498 3.5-3.35 3.5s-3.346-1.561-3.344-3.5c0 1.939-1.49 3.5-3.344 3.5s-3.345-1.561-3.35-3.5c-.007 1.939-1.499 3.5-3.35 3.5c-.47 0-.917-.1-1.322-.282M37.453 5.5v8.335c0 1.939-1.492 3.5-3.345 3.5s-3.345-1.561-3.349-3.5c-.003 1.939-1.495 3.5-3.348 3.5s-3.345-1.561-3.345-3.5m17.929 3.276a3.2 3.2 0 0 1-1.185.224c-1.853 0-3.345-1.561-3.345-3.5"></svg:path><svg:path d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.34 35.925V22.872h4.367c2.469 0 4.47 1.963 4.47 4.384s-2.001 4.383-4.47 4.383H26.34m4.367.001l4.366 4.281m-13.413.004l-4.419-4.272m.001-8.781c2.448 0 4.418 1.928 4.418 4.324V31.6c0 2.395-1.97 4.324-4.418 4.324h0c-2.448 0-4.419-1.928-4.419-4.324v-4.405c0-2.396 1.97-4.324 4.419-4.324"></svg:path>`,
})
export class ArcticonsQrKbankShopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
