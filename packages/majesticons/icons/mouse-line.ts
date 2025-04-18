import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMouseLineIcon],svg[majesticons-mouse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 11V9a6 6 0 0 0-6-6v0m6 8v4a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v-4m12 0h-6m-6 0V9a6 6 0 0 1 6-6v0m-6 8h6m0 0V3"></svg:path>`,
})
export class MajesticonsMouseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
