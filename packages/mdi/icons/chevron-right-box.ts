import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChevronRightBoxIcon],svg[mdi-chevron-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2M9.71 18l-1.42-1.41L12.88 12L8.29 7.41L9.71 6l6 6z"></svg:path>`,
})
export class MdiChevronRightBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
