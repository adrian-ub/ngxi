import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignVerticalCenterLineIcon],svg[majesticons-align-vertical-center-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12v6a2 2 0 1 0 4 0v-6m-4 0V6a2 2 0 1 1 4 0v6m-4 0H3m7 0h4m0 0v3a2 2 0 1 0 4 0v-3m-4 0V9a2 2 0 1 1 4 0v3m0 0h3"></svg:path>`,
})
export class MajesticonsAlignVerticalCenterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
