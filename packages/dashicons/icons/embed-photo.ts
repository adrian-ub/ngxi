import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEmbedPhotoIcon],svg[dashicons-embed-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 8H3V6h7zm4-1.5L12.5 12l1.5 1.5V15l-3-3l3-3zm1 4.5v-1.5l1.5-1.5l-1.5-1.5V9l3 3zm-6-4V8.5L7.2 10L6 9.2L4 11zM4.6 8.6c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class DashiconsEmbedPhotoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
