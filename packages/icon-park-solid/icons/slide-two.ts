import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlideTwoIcon],svg[icon-park-solid-slide-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSlideTwo0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M4 8h40"></svg:path><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" d="M8 8h32v26H8z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="m31 18l3 3l-3 3m-14 0l-3-3l3-3"></svg:path><svg:path stroke="#fff" d="m16 42l8-8l8 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSlideTwo0)"></svg:path>`,
})
export class IconParkSolidSlideTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
