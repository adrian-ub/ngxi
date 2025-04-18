import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuUnfold3FillIcon],svg[ri-menu-unfold-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm0-1V7l5 5z"></svg:path>`,
})
export class RiMenuUnfold3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
