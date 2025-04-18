import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShareBoxFillIcon],svg[ri-share-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.707 4.707L12 13.414L10.586 12l5.707-5.707L13 3h8v8z"></svg:path>`,
})
export class RiShareBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
