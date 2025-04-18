import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostOutline24pxIcon],svg[healthicons-rural-post-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 8v2h2V8h2V6h-2V4h-2v2h-2v2zm5-3h3v2h-3z"></svg:path><svg:path fill-rule="evenodd" d="M3 19a1 1 0 0 1 1-1V8h6v2H6v8h4v-6h6v6h2V8h2v10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m11-1v-4h-2v4z" clip-rule="evenodd"></svg:path><svg:path d="M10 5H3v2h7z"></svg:path></svg:g>`,
})
export class HealthiconsRuralPostOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
