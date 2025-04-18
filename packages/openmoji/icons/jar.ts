import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJarIcon],svg[openmoji-jar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fff"><svg:path d="M26.3 33.1h19.3a1.686 1.686 0 0 1 1.7 1.7v14.1a1.686 1.686 0 0 1-1.7 1.7H26.3a1.686 1.686 0 0 1-1.7-1.7V34.8a1.83 1.83 0 0 1 1.7-1.7"></svg:path><svg:path d="M53 29.5v30.2a3.135 3.135 0 0 1-2.9 3.3H21.9a3.135 3.135 0 0 1-2.9-3.3V29.5a15.04 15.04 0 0 1 2.2-7.8l1.8-3v-4.2h-.9a1.58 1.58 0 0 1-1.6-1.6v-2.4a1.58 1.58 0 0 1 1.6-1.6h27.8a1.58 1.58 0 0 1 1.6 1.6v2.4a1.58 1.58 0 0 1-1.6 1.6H49v4.2l1.8 3a14.8 14.8 0 0 1 2.2 7.8m-3.4-15H23"></svg:path></svg:g><svg:path fill="#9b9b9a" d="M49.6 14.7H22.4l-1.5-1.3l-.7-2.3l1-2h29.1l1.5.9l-.3 3.7z"></svg:path><svg:path fill="#d0cfce" d="M53 28.1v33.2L50.5 63h-3.2V36c0-11.3-11.9-17-24.9-17l.3-4.5H49v2.6l.6 2.5l2.2 3.9Z"></svg:path><svg:path fill="#3f3f3f" d="M51.8 10v3.4l-1.1.9v.2h-4.5V9.1h4.6v.1z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="M26.3 33.1h19.3a1.686 1.686 0 0 1 1.7 1.7v14.1a1.686 1.686 0 0 1-1.7 1.7H26.3a1.686 1.686 0 0 1-1.7-1.7V34.8a1.83 1.83 0 0 1 1.7-1.7Z"></svg:path><svg:path stroke-linejoin="round" d="M53 29.5v30.2a3.135 3.135 0 0 1-2.9 3.3H21.9a3.135 3.135 0 0 1-2.9-3.3V29.5a15.04 15.04 0 0 1 2.2-7.8l1.8-3v-4.2h-.9a1.58 1.58 0 0 1-1.6-1.6v-2.4a1.58 1.58 0 0 1 1.6-1.6h27.8a1.58 1.58 0 0 1 1.6 1.6v2.4a1.58 1.58 0 0 1-1.6 1.6H49v4.2l1.8 3a14.8 14.8 0 0 1 2.2 7.8Zm-3.4-15H23"></svg:path></svg:g>`,
})
export class OpenmojiJarIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
