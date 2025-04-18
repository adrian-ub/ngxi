import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOutboundIcon],svg[tabler-outbound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m6 3l6-6"></svg:path><svg:path d="M11 9h4v4"></svg:path></svg:g>`,
})
export class TablerOutboundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
