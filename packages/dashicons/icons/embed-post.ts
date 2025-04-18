import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEmbedPostIcon],svg[dashicons-embed-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8.6 9l-.4.3c-.4.4-.5 1.1-.2 1.6l-.8.8l-1.1-1.1l-1.3 1.3c-.2.2-1.6 1.3-1.8 1.1s.9-1.6 1.1-1.8l1.3-1.3l-1.1-1.1l.8-.8c.5.3 1.2.3 1.6-.2l.3-.3c.5-.5.5-1.2.2-1.7L8 5l3 2.9l-.8.8c-.5-.2-1.2-.2-1.6.3m5.4 1.5L12.5 12l1.5 1.5V15l-3-3l3-3zm1 4.5v-1.5l1.5-1.5l-1.5-1.5V9l3 3z"></svg:path>`,
})
export class DashiconsEmbedPostIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
