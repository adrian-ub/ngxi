import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZipIcon],svg[tabler-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16V8h2a2 2 0 1 1 0 4h-2m-4-4v8M4 8h4l-4 8h4"></svg:path>`,
})
export class TablerZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
