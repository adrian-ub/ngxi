import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTextIcon],svg[ri-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6v15h-2V6H5V4h14v2z"></svg:path>`,
})
export class RiTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
