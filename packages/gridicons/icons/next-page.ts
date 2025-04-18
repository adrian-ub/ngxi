import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsNextPageIcon],svg[gridicons-next-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-8V6h8zm4-4v8l-6 6H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m-2 0H8v12h6v-4a2 2 0 0 1 2-2h4zM4 6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2H4z"></svg:path>`,
})
export class GridiconsNextPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
