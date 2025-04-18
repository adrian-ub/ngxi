import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciWarningIcon],svg[ci-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v8m.05 4v.1h-.1V18z"></svg:path>`,
})
export class CiWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
