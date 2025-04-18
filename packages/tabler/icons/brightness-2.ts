import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrightness2Icon],svg[tabler-brightness-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M6 6h3.5L12 3.5L14.5 6H18v3.5l2.5 2.5l-2.5 2.5V18h-3.5L12 20.5L9.5 18H6v-3.5L3.5 12L6 9.5z"></svg:path></svg:g>`,
})
export class TablerBrightness2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
