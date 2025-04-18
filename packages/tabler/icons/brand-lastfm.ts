import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandLastfmIcon],svg[tabler-brand-lastfm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 8c-.83-1-1.388-1-2-1s-2 .271-2 2s1.384 2.233 3 3s2.125 1.812 2 3s-1 2-3 2s-3-1-3.5-2s-1.585-4.78-2.497-6a5 5 0 1 0-1 7"></svg:path>`,
})
export class TablerBrandLastfmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
