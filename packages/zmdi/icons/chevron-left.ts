import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiChevronLeftIcon],svg[zmdi-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158 94l-98 98l98 98l-30 30L0 192L128 64z"></svg:path>`,
})
export class ZmdiChevronLeftIcon {
  readonly viewBox = input("0 0 160 384")
  readonly width = input("0.42em")
  readonly height = input("1em")
}
