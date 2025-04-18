import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMoreIcon],svg[tdesign-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3h3v3h-3zm0 7.5h3v3h-3zm0 7.5h3v3h-3z"></svg:path>`,
})
export class TdesignMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
