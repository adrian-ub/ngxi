import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterHdrOutlineIcon],svg[mdi-image-filter-hdr-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18H1l7.25-9.67l2 2.67L14 6zm-11.5-5.33L14 16h5l-5-6.67zM5 16h6.5l-3.25-4.33z"></svg:path>`,
})
export class MdiImageFilterHdrOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
