import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimToggleOffIcon],svg[uim-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 17.5h-9a5.5 5.5 0 1 1 0-11h9a5.5 5.5 0 1 1 0 11" opacity=".5"></svg:path><svg:circle cx="7.5" cy="12" r="2.5" fill="currentColor"></svg:circle>`,
})
export class UimToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
