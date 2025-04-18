import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineThreatBrowser1SolidIcon],svg[streamline-threat-browser-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 3.315v8.934c0 .113.092.205.205.205h2.245a.75.75 0 0 1 0 1.5H1.751a1.704 1.704 0 0 1-1.705-1.705V1.751C.046.809.81.046 1.751.046h10.498c.942 0 1.705.763 1.705 1.705v4.73a.75.75 0 0 1-1.5 0V3.315zm7.368 3.697a1 1 0 0 1 1.736 0l3.139 5.492A1 1 0 0 1 12.92 14H6.643a1 1 0 0 1-.868-1.496zm.868 6.113a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25m0-4.25c.345 0 .625.28.625.625v1a.625.625 0 0 1-1.25 0v-1c0-.345.28-.625.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineThreatBrowser1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
