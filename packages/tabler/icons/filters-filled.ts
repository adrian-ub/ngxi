import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFiltersFilledIcon],svg[tabler-filters-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.396 11.056a6 6 0 0 1-5.647 10.506q.206-.21.396-.44a8 8 0 0 0 1.789-6.155a8.02 8.02 0 0 0 3.462-3.911m-14.787-.005a7.99 7.99 0 0 0 9.386 4.698a6 6 0 1 1-9.534-4.594z"></svg:path><svg:path d="M12 2a6 6 0 1 1-6 6l.004-.225A6 6 0 0 1 12 2"></svg:path></svg:g>`,
})
export class TablerFiltersFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
