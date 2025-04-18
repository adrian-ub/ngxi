import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiBookmarkIcon],svg[oi-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v8l2-2l2 2V0z"></svg:path>`,
})
export class OiBookmarkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
