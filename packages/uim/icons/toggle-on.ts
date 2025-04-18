import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimToggleOnIcon],svg[uim-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.5" cy="12" r="2.5" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M16.5 6.5h-9a5.5 5.5 0 0 0 0 11h9a5.5 5.5 0 0 0 0-11m0 8a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class UimToggleOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
