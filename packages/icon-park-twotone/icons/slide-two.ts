import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSlideTwoIcon],svg[icon-park-twotone-slide-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSlideTwo0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 8h40"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M8 8h32v26H8z" clip-rule="evenodd"></svg:path><svg:path d="m31 18l3 3l-3 3m-14 0l-3-3l3-3m-1 24l8-8l8 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSlideTwo0)"></svg:path>`,
})
export class IconParkTwotoneSlideTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
