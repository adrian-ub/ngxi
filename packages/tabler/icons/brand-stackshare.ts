import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandStackshareIcon],svg[tabler-brand-stackshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h3l3.5 6H17m0-12h-3.5L10 12"></svg:path>`,
})
export class TablerBrandStackshareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
