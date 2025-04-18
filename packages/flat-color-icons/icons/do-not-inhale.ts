import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDoNotInhaleIcon],svg[flat-color-icons-do-not-inhale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="flatColorIconsDoNotInhale0" fill="#FFA726" d="M33.5 20C31.2 17.7 30 13.9 30 9V6H18v3c0 4.9-1.2 8.7-3.5 11c-2.4.2-5.5 2-5.5 5.4c0 4.5 5.1 4.6 6 4.6c1.2 0 6.1 4 8 4h2c1.9 0 6.8-4 8-4c.9 0 6-.1 6-4.6c0-3.4-3.1-5.2-5.5-5.4"></svg:path></svg:defs><svg:use href="#flatColorIconsDoNotInhale0"></svg:use><svg:use href="#flatColorIconsDoNotInhale0"></svg:use><svg:path fill="#FFB74D" d="M26 9V6h-4v3c0 4.9-3 19-3 19s1.6 2 5 2s5-2 5-2s-3-14.1-3-19"></svg:path><svg:path fill="#CC861E" d="M23 34c-3.3 0-6.4-3.1-8-4h1.8c3.1 0 4.5 4 6.2 4m2 0c3.3 0 6.4-3.1 8-4h-1.8c-3.1 0-4.5 4-6.2 4"></svg:path><svg:path fill="#37474F" d="M3.563 6.396L6.39 3.568l37.966 37.966l-2.828 2.828z"></svg:path><svg:g fill="#FF5722"><svg:path d="m18 35l4 4h-8z"></svg:path><svg:path d="M17 38h2v4h-2zm13-3l4 4h-8z"></svg:path><svg:path d="M29 38h2v4h-2z"></svg:path></svg:g>`,
})
export class FlatColorIconsDoNotInhaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
