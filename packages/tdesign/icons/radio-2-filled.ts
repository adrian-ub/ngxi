import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRadio2FilledIcon],svg[tdesign-radio-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill="currentColor" d="M23 3v16h-4v3h-2v-3H7v3H5v-3H1V3zm-8 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8M9 8H5v2h4zm0 4H5v2h4z"></svg:path>`,
})
export class TdesignRadio2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
