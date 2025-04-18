import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsFormViewIcon],svg[grommet-icons-form-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 17c-2.727 0-6-2.778-6-5s3.273-5 6-5s6 2.778 6 5s-3.273 5-6 5Zm-1-5a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"></svg:path>`,
})
export class GrommetIconsFormViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
