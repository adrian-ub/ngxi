import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAccelerationIcon],svg[icon-park-outline-acceleration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M42 35h-8m-3 7h-4"></svg:path><svg:path stroke-linejoin="round" d="m14 22l-6-5H4s5.486 10 8 10h32l-6-5z"></svg:path><svg:path stroke-linejoin="round" d="m30 22l-11.34-8H16l3 8m11 5L17.2 39H14l4.267-12M32 11c0 1-3 2-3 2h10s2.886 0 3.745-2.286C43.63 8.36 42.045 5 39.022 5S36 8 36 8s-1.855-.571-3 0s-1 2-1 3"></svg:path></svg:g>`,
})
export class IconParkOutlineAccelerationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
