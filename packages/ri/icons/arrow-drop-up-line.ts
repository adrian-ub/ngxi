import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowDropUpLineIcon],svg[ri-arrow-drop-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 11.828l-2.828 2.829l-1.415-1.414L12 9l4.243 4.243l-1.415 1.414z"></svg:path>`,
})
export class RiArrowDropUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
