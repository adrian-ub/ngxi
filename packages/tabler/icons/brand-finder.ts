import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandFinderIcon],svg[tabler-brand-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 3v1m10-1v1"></svg:path><svg:path d="M12.5 4c-.654 1.486-1.26 3.443-1.5 9h2.5c-.19 2.867.094 5.024.5 7"></svg:path><svg:path d="M7 15.5c3.667 2 6.333 2 10 0"></svg:path></svg:g>`,
})
export class TablerBrandFinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
