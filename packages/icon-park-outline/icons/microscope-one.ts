import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMicroscopeOneIcon],svg[icon-park-outline-microscope-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="m29.003 18.373l1.105-1.105l.53-.53a5.5 5.5 0 0 0 0-7.778v0a5.5 5.5 0 0 0-7.778 0L9.172 22.648a.143.143 0 0 0 0 .202l6.97 6.97a1 1 0 0 0 1.414 0l3.713-3.713l1.105-1.105"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m28.163 6.485l1.768-1.767a3.5 3.5 0 0 1 4.95 4.95l-1.768 1.767zM10.485 24.163l-4.242 4.243l4.95 4.95l4.242-4.243z"></svg:path><svg:circle cx="26.041" cy="22.042" r="4.5" transform="rotate(45 26.041 22.042)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m6 20l12.728 12.728M10 44h32M31 22c4 0 8 4 8 10c0 6.4-5.167 9.833-8 12"></svg:path></svg:g>`,
})
export class IconParkOutlineMicroscopeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
