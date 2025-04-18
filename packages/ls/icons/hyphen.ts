import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsHyphenIcon],svg[ls-hyphen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M274 248v73H0v-73z"></svg:path>`,
})
export class LsHyphenIcon {
  readonly viewBox = input("0 0 274 614")
  readonly width = input("0.45em")
  readonly height = input("1em")
}
