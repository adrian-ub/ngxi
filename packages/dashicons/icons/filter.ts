import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsFilterIcon],svg[dashicons-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.5v-2s3.34-1 7-1s7 1 7 1v2l-5 7.03v6.97s-1.22-.09-2.25-.59S8 16.5 8 16.5v-4.97z"></svg:path>`,
})
export class DashiconsFilterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
