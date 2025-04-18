import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsReburgerIcon],svg[arcticons-reburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 33.75h37v8.75h-37zm0-28.25h37v8.75h-37zm0 23.625c23.056 5.886 13.944-7.886 37-2v-8.25c-23.056-5.886-13.944 7.886-37 2z"></svg:path>`,
})
export class ArcticonsReburgerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
