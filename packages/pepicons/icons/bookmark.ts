import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsBookmarkIcon],svg[pepicons-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.245 17.666L10 13.467l3.755 4.2c.611.684 1.745.251 1.745-.667V3a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v14c0 .918 1.134 1.35 1.745.666Zm.255-3.285V4h7v10.381l-2.755-3.08a1 1 0 0 0-1.49 0L6.5 14.38Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsBookmarkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
