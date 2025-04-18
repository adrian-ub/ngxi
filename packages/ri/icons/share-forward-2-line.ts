import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShareForward2LineIcon],svg[ri-share-forward-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2zM16.172 7l-3.95-3.95l1.414-1.414L20 8l-6.364 6.364l-1.414-1.415L16.172 9H5V7z"></svg:path>`,
})
export class RiShareForward2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
