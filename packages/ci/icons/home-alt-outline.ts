import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHomeAltOutlineIcon],svg[ci-home-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a1 1 0 0 1-1-1v-8H2l9.292-9.293a1 1 0 0 1 1.415 0L22 13h-2v8a1 1 0 0 1-1 1Zm-9-7h4v5h4v-8.172l-6-6l-6 6V20h4v-5Z"></svg:path>`,
})
export class CiHomeAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
