import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDot01XsIcon],svg[ci-dot-01-xs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"></svg:path>`,
})
export class CiDot01XsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
