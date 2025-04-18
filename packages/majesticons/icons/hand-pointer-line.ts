import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandPointerLineIcon],svg[majesticons-hand-pointer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20v-3a4 4 0 0 0-4-4h-1a1 1 0 0 1-1-1V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10l-2.4-3.2A2 2 0 0 0 6 12h-.382C4.724 12 4 12.724 4 13.618v0c0 .251.058.499.17.724L7 20"></svg:path>`,
})
export class MajesticonsHandPointerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
