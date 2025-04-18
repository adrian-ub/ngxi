import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseRefreshIcon],svg[streamline-database-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 4.74c3.038 0 5.5-.95 5.5-2.12S9.038.5 6 .5S.5 1.45.5 2.62S2.962 4.74 6 4.74M11.5 6V2.62"></svg:path><svg:path d="M.5 2.62v6.76c0 1.043 1.94 1.877 4.5 2.076"></svg:path><svg:path d="M6 8.08C3 8.12.5 7.17.5 6m12.9 5.368l-.841.636l-.636-.84"></svg:path><svg:path d="M12.512 11.941a2.58 2.58 0 0 0-3.25-3.585M7.045 10.17l.84-.635l.637.84"></svg:path><svg:path d="M7.932 9.599a2.58 2.58 0 0 0 3.25 3.585"></svg:path></svg:g>`,
})
export class StreamlineDatabaseRefreshIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
