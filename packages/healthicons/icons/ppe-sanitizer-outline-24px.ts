import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSanitizerOutline24pxIcon],svg[healthicons-ppe-sanitizer-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 12v2H9v2h2v2h2v-2h2v-2h-2v-2z"></svg:path><svg:path fill-rule="evenodd" d="M8.243 4a2 2 0 0 0-1.415.586l-1.12 1.121l-1.415-1.414l1.121-1.121A4 4 0 0 1 8.243 2H17v2h-4v3h1a2 2 0 0 1 2 2a3 3 0 0 1 3 3v10H5V12a3 3 0 0 1 3-3a2 2 0 0 1 2-2h1V4zM7 20h10v-8a1 1 0 0 0-1-1h-2V9h-4v2H8a1 1 0 0 0-1 1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeSanitizerOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
