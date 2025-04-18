import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTractorIcon],svg[tabler-tractor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 15a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 0v.01M17 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-6.5 0H17"></svg:path><svg:path d="M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5"></svg:path><svg:path d="M18 5h-1a1 1 0 0 0-1 1v4"></svg:path></svg:g>`,
})
export class TablerTractorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
