import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsSiteIcon],svg[gridicons-site-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-5 14H6v-7h7zm5 0h-3v-7h3zm0-9H6V6h12z"></svg:path>`,
})
export class GridiconsSiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
