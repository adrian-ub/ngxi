import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignEllipsisIcon],svg[tdesign-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10.5h3v3H3zm7.5 0h3v3h-3zm7.5 0h3v3h-3z"></svg:path>`,
})
export class TdesignEllipsisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
