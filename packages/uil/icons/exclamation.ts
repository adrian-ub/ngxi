import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilExclamationIcon],svg[uil-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1m0 4a1.25 1.25 0 1 0-1.25-1.25A1.25 1.25 0 0 0 12 18"></svg:path>`,
})
export class UilExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
