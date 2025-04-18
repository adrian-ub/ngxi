import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRadio1FilledIcon],svg[tdesign-radio-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill="currentColor" d="M23 22H1V6.382L12.447.658l.895 1.79L6.236 6H23zM9 10a4 4 0 1 0 0 8a4 4 0 0 0 0-8m10 1h-4v2h4zm0 4h-4v2h4z"></svg:path>`,
})
export class TdesignRadio1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
