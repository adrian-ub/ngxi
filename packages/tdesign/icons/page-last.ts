import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPageLastIcon],svg[tdesign-page-last-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 5v14h-2V5zm-9.75.336L14.414 12L7.75 18.664L6.336 17.25l5.25-5.25l-5.25-5.25z"></svg:path>`,
})
export class TdesignPageLastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
