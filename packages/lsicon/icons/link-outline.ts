import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLinkOutlineIcon],svg[lsicon-link-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8.342 10.658l-1.916 1.916a2.127 2.127 0 1 1-3.008-3.008L5.334 7.65m5.36.656L12.61 6.39a2.127 2.127 0 1 0-3.007-3.008L7.5 5.484m-1.504 4.519l3.995-3.995"></svg:path>`,
})
export class LsiconLinkOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
