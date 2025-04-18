import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhonePageHeader24FilledIcon],svg[fluent-phone-page-header-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6.005V19.75A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V6.005zM15.75 2A2.25 2.25 0 0 1 18 4.25V5H6v-.75A2.25 2.25 0 0 1 8.25 2z"></svg:path>`,
})
export class FluentPhonePageHeader24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
