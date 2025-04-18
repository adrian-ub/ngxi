import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhonePageHeader20FilledIcon],svg[fluent-phone-page-header-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1H5zm0 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6z"></svg:path>`,
})
export class FluentPhonePageHeader20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
