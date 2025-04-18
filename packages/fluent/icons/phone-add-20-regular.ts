import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneAdd20RegularIcon],svg[fluent-phone-add-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.5A1.5 1.5 0 0 1 5.5 2h7A1.5 1.5 0 0 1 14 3.5v5.522a5.5 5.5 0 0 0-1 .185V3.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h4.1q.276.538.657 1H5.5A1.5 1.5 0 0 1 4 16.5zM9.022 14a5.6 5.6 0 0 0 0 1H7.5a.5.5 0 0 1 0-1zm9.978.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"></svg:path>`,
})
export class FluentPhoneAdd20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
