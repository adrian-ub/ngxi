import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneMobile20RegularIcon],svg[fluent-phone-mobile-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 2a2 2 0 0 1 1.995 1.85L15 4v12a2 2 0 0 1-1.85 1.995L13 18H7a2 2 0 0 1-1.995-1.85L5 16V4a2 2 0 0 1 1.85-1.995L7 2h6zm0 1H7a1 1 0 0 0-.993.883L6 4v12a1 1 0 0 0 .883.993L7 17h6a1 1 0 0 0 .993-.883L14 16V4a1 1 0 0 0-.883-.993L13 3zm-2 11a.5.5 0 0 1 .09.992L11 15H9a.5.5 0 0 1-.09-.992L9 14h2z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentPhoneMobile20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
