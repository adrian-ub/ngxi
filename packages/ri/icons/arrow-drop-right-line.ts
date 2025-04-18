import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowDropRightLineIcon],svg[ri-arrow-drop-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z"></svg:path>`,
})
export class RiArrowDropRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
