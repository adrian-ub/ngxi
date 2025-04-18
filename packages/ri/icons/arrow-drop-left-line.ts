import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowDropLeftLineIcon],svg[ri-arrow-drop-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.828 12l2.829 2.829l-1.414 1.414L9 12.001l4.243-4.243l1.414 1.414z"></svg:path>`,
})
export class RiArrowDropLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
