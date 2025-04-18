import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCatIcon],svg[tabler-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 3v10a8 8 0 1 1-16 0V3l3.432 3.432A7.96 7.96 0 0 1 12 5c1.769 0 3.403.574 4.728 1.546z"></svg:path><svg:path d="M2 16h5l-4 4m19-4h-5l4 4m-10-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-2-5v.01m6-.01v.01"></svg:path></svg:g>`,
})
export class TablerCatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
