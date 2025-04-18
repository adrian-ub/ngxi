import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiChevronRightIcon],svg[zmdi-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 64l128 128L30 320L0 290l98-98L0 94z"></svg:path>`,
})
export class ZmdiChevronRightIcon {
  readonly viewBox = input("0 0 160 384")
  readonly width = input("0.42em")
  readonly height = input("1em")
}
