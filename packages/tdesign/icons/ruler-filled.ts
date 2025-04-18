import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRulerFilledIcon],svg[tdesign-ruler-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.78 2H6.72L5.594 6.5h4.281v2H5.094L4.469 11H8.75v2H3.969l-.625 2.5h4.281v2H2.844L1.719 22h20.28v-2H12.28z"></svg:path>`,
})
export class TdesignRulerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
