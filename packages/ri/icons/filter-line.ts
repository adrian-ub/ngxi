import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFilterLineIcon],svg[ri-filter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4zM6.404 6L11 12.894V20h2v-7.106L17.596 6z"></svg:path>`,
})
export class RiFilterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
