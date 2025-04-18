import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeTextWidthIcon],svg[icomoon-free-text-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14v2l-3-2.5L4 11v2h8v-2l3 2.5l-3 2.5v-2zm9-13v4l-1-2H9v7h2v1H5v-1h2V3H4L3 5V1z"></svg:path>`,
})
export class IcomoonFreeTextWidthIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
