import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerScreenshotIcon],svg[tabler-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 19a2 2 0 0 1-2-2m0-4v-2m0-4a2 2 0 0 1 2-2m4 0h2m4 0a2 2 0 0 1 2 2m0 4v2m0 4v4m2-2h-4m-4 0h-2"></svg:path>`,
})
export class TablerScreenshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
