import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerLeftUpLineIcon],svg[ri-corner-left-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19h9v-2h-7V6.828l3.95 3.95l1.414-1.414L11 3L4.636 9.364l1.414 1.414L10 6.828z"></svg:path>`,
})
export class RiCornerLeftUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
