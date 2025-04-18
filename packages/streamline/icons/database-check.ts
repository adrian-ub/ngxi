import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseCheckIcon],svg[streamline-database-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 4.74c3.038 0 5.5-.95 5.5-2.12S9.038.5 6 .5S.5 1.45.5 2.62S2.962 4.74 6 4.74m5.5 2.76V2.62"></svg:path><svg:path d="M.5 2.62v6.76c0 1 1.78 1.83 4.19 2.06"></svg:path><svg:path d="M11.5 6C11.5 7.17 9 8.12 6 8.12S.5 7.17.5 6m13 3l-4 4.5l-2-1.5"></svg:path></svg:g>`,
})
export class StreamlineDatabaseCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
