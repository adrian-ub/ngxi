import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimExclamationCircleIcon],svg[uim-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"></svg:path>`,
})
export class UimExclamationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
