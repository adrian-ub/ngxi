import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHttpsFilledIcon],svg[tdesign-https-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7v3.5h2.5V22h-17V10.5H6V7a6 6 0 1 1 12 0M8 7v3.5h8V7a4 4 0 1 0-8 0m4 7.25a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class TdesignHttpsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
