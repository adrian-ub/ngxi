import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciGridVerticalIcon],svg[ci-grid-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20h-4v-4h4v4Zm-6 0H7v-4h4v4Zm6-6h-4v-4h4v4Zm-6 0H7v-4h4v4Zm6-6h-4V4h4v4Zm-6 0H7V4h4v4Z"></svg:path>`,
})
export class CiGridVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
