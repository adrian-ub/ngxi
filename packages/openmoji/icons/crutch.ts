import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCrutchIcon],svg[openmoji-crutch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#61b2e4"><svg:path d="M37.809 65.827c0-2.388-1.079-4.323-2.41-4.323s-2.409 1.935-2.409 4.322zM46.31 26.29a1 1 0 0 1-1.27-.63l-.27-.81l-6.88 2.38l-1.89.66l-.65-1.89l-5.57-16.11c-.18-.52.1-1.09.62-1.27s1.09.1 1.27.62l5.57 16.1l7.83-2.71c.25-.09.53-.07.77.05s.42.32.51.58l.59 1.77c.18.52-.1 1.09-.63 1.26"></svg:path><svg:path d="m28.448 8.932l7.399-2.55a3.787 3.787 0 0 1 4.812 2.344a3.787 3.787 0 0 1-2.345 4.812l-7.4 2.55z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="M35.399 29.098v32.406"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37.809 65.827c0-2.388-1.079-4.323-2.41-4.323s-2.409 1.935-2.409 4.322zM28.448 8.932l7.399-2.55a3.787 3.787 0 0 1 4.812 2.344h0a3.787 3.787 0 0 1-2.345 4.812l-7.4 2.55z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M45.993 25.44L35.41 29.098L28.448 8.954"></svg:path></svg:g>`,
})
export class OpenmojiCrutchIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
