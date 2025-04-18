import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTestTubeFilledLineIcon],svg[majesticons-test-tube-filled-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3h2m10 0h-2m0 0H8m8 0v5M8 3v5m0 0v9a4 4 0 0 0 4 4v0a4 4 0 0 0 4-4V8M8 8h8m-5 8"></svg:path>`,
})
export class MajesticonsTestTubeFilledLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
