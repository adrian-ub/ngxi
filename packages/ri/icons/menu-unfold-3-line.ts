import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuUnfold3LineIcon],svg[ri-menu-unfold-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm-1.01-9.186L17.404 7.4L22 11.996l-4.596 4.596l-1.414-1.414l3.182-3.182z"></svg:path>`,
})
export class RiMenuUnfold3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
