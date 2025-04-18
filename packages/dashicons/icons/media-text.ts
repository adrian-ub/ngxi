import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsMediaTextIcon],svg[dashicons-media-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l4 4v12H4V2zM5 3v1h6V3zm7 3h3l-3-3zM5 5v1h6V5zm10 3V7H5v1zm0 2V9H5v1zm0 2v-1H5v1zm-4 2v-1H5v1z"></svg:path>`,
})
export class DashiconsMediaTextIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
