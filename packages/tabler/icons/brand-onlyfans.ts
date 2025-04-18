import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandOnlyfansIcon],svg[tabler-brand-onlyfans-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.5 6a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13"></svg:path><svg:path d="M8.5 15a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m5.5 1c2.5 0 6.42-1.467 7-4h-6c3-1 6.44-3.533 7-6h-4c-3.03 0-3.764-.196-5 1.5"></svg:path></svg:g>`,
})
export class TablerBrandOnlyfansIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
