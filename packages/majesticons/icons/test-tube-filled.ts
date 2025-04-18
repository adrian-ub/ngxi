import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTestTubeFilledIcon],svg[majesticons-test-tube-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 2a1 1 0 0 0 0 2h1v13a5 5 0 0 0 10 0V4h1a1 1 0 1 0 0-2zm3 5V4h6v3zm4.708 5.708a1 1 0 0 1-1.414 0h-.001a1 1 0 0 1 1.414-1.415a1 1 0 0 1 0 1.415zm-3.414 4a1 1 0 1 0 1.414-1.414v-.001a1 1 0 0 0-1.415 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsTestTubeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
