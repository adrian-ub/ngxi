import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowDropRightFillIcon],svg[ri-arrow-drop-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 12l-4 4V8z"></svg:path>`,
})
export class RiArrowDropRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
