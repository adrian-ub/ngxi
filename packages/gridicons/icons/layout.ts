import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsLayoutIcon],svg[gridicons-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2m8-10h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2m5 10v-6a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2"></svg:path>`,
})
export class GridiconsLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
