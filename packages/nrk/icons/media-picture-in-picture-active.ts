import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaPictureInPictureActiveIcon],svg[nrk-media-picture-in-picture-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 11v10h13V11zm11 8h-9v-6h9z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3 17V5h18v4h2V3H1v16h7v-2z"></svg:path>`,
})
export class NrkMediaPictureInPictureActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
