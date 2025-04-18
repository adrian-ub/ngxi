import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCodeBlockIcon],svg[majesticons-code-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm5 1a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-8 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm-4 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCodeBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
