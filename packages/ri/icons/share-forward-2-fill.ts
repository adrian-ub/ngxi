import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShareForward2FillIcon],svg[ri-share-forward-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2zm8-9H9a6 6 0 0 0-4.854 2.473A8 8 0 0 1 12 6V2l8 6l-8 6z"></svg:path>`,
})
export class RiShareForward2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
