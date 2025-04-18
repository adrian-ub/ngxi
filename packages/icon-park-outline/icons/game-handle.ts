import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGameHandleIcon],svg[icon-park-outline-game-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 18H16C9.373 18 4 23.373 4 30s5.373 12 12 12h16c6.627 0 12-5.373 12-12s-5.373-12-12-12Z"></svg:path><svg:path stroke-linecap="round" d="M16 26v8m-4-4h8m4-14V9.714h8V4"></svg:path><svg:path d="M32 34a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g>`,
})
export class IconParkOutlineGameHandleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
