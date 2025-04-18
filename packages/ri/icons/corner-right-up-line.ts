import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerRightUpLineIcon],svg[ri-corner-right-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19H5v-2h7V6.828l-3.95 3.95l-1.414-1.414L13 3l6.364 6.364l-1.414 1.414L14 6.828z"></svg:path>`,
})
export class RiCornerRightUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
