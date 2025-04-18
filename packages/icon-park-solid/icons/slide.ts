import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlideIcon],svg[icon-park-solid-slide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSlide0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M41 5.5H7v28h34z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m16 41.5l8-8l8 8"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m13.924 24.663l5.642-5.508l4.442 4.345l9.959-9.98"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 5.5h40"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSlide0)"></svg:path>`,
})
export class IconParkSolidSlideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
