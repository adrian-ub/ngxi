import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryWIcon],svg[tabler-wash-dry-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="m8 8l1.5 8h1l1.5-6l1.5 6h1L16 8"></svg:path></svg:g>`,
})
export class TablerWashDryWIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
