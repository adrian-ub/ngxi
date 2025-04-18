import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandFiverrIcon],svg[tabler-brand-fiverr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3h-2a6 6 0 0 0-6 6H4v4h3v8h4v-7h4v7h4V10h-8V8.967A1.967 1.967 0 0 1 13 7h2z"></svg:path>`,
})
export class TablerBrandFiverrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
