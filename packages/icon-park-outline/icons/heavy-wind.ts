import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHeavyWindIcon],svg[icon-park-outline-heavy-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.642-2.066 6.793-5.07 8.304c-.25.126-.53.182-.81.182H15m0 0h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3"></svg:path><svg:path d="M22 18h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3m-3 0h13"></svg:path></svg:g>`,
})
export class IconParkOutlineHeavyWindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
