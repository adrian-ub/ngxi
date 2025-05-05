import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEllipsisIcon],svg[picon-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h2v2H6M3 3h2v2H3M0 5V3h2v2"></svg:path>`,
})
export class PiconEllipsisIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
