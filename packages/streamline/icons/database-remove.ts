import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseRemoveIcon],svg[streamline-database-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 9L9 13.5M9 9l4.5 4.5M6 4.74c3.038 0 5.5-.95 5.5-2.12S9.038.5 6 .5S.5 1.45.5 2.62S2.962 4.74 6 4.74m5.5 2.76V2.62"></svg:path><svg:path d="M.5 2.62v6.76c0 1.17 2.44 2.11 5.5 2.12"></svg:path><svg:path d="M6 8.12C3 8.12.5 7.17.5 6"></svg:path></svg:g>`,
})
export class StreamlineDatabaseRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
