import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsPluginsIcon],svg[gridicons-plugins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8V3a1 1 0 0 0-2 0v5h-4V3a1 1 0 0 0-2 0v5H5v4a6.99 6.99 0 0 0 4 6.317V22h6v-3.683A6.99 6.99 0 0 0 19 12V8z"></svg:path>`,
})
export class GridiconsPluginsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
