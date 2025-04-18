import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDiggIcon],svg[tabler-brand-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 15H3v-4h3m9 4h-3v-4h3m-6 4v-4"></svg:path><svg:path d="M15 11v7h-3M6 7v8m15 0h-3v-4h3"></svg:path><svg:path d="M21 11v7h-3"></svg:path></svg:g>`,
})
export class TablerBrandDiggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
