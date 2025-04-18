import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilWrapTextIcon],svg[uil-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m6 8H3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m9.5-5H3a1 1 0 0 0 0 2h15.5a1.5 1.5 0 0 1 0 3h-3.09l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l2 2a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-.3-.29h3.09a3.5 3.5 0 0 0 0-7"></svg:path>`,
})
export class UilWrapTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
