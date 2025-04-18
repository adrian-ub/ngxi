import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsTabletIcon],svg[gridicons-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-5 19h-2v-1h2zm5-2H6V5h12z"></svg:path>`,
})
export class GridiconsTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
