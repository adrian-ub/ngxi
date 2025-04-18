import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditStraightIcon],svg[gg-edit-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7m-7 9H1v-2h4zm14 0a7 7 0 1 1-14 0zm0 0v-2h4v2z"></svg:path>`,
})
export class GgEditStraightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
