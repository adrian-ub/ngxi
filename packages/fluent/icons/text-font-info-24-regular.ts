import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFontInfo24RegularIcon],svg[fluent-text-font-info-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.51 2a.75.75 0 0 1 .697.5l3.182 8.965a6.5 6.5 0 0 0-1.157 1.226L9.47 4.908L6.337 13h5.685a6.5 6.5 0 0 0-.709 1.5H5.756L4.2 18.52a.75.75 0 1 1-1.4-.54l6-15.5A.75.75 0 0 1 9.51 2M17 16v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0m1.25-2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M23 16.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-1 0a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"></svg:path>`,
})
export class FluentTextFontInfo24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
