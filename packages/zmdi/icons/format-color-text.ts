import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatColorTextIcon],svg[zmdi-format-color-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 363h512v85H0zM235 0h42l117 299h-48l-23-64H189l-24 64h-48zm-30 192h102L256 57z"></svg:path>`,
})
export class ZmdiFormatColorTextIcon {
  readonly viewBox = input("0 0 512 448")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
