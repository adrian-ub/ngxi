import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiTagsIcon],svg[oi-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v2l3 3l1.5-1.5L5 4L3 2L2 1zm3.41 0l3 3l-1.19 1.22L6 6l2-2l-3-3zM1.5 2c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5"></svg:path>`,
})
export class OiTagsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
