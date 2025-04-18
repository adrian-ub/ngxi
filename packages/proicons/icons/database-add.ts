import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsDatabaseAddIcon],svg[proicons-database-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 6.25c0 1.933-3.246 3.5-7.25 3.5s-7.25-1.567-7.25-3.5m14.5 0c0-1.933-3.246-3.5-7.25-3.5s-7.25 1.567-7.25 3.5m14.5 0v3.53M4.75 6.25V12m0 0v5.75c0 1.756 2.678 3.21 6.17 3.461M4.75 12c0 1.577 2.16 2.91 5.13 3.348"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0-8.993a.5.5 0 0 1 .5.5V17h2.493a.5.5 0 1 1 0 1H18v2.493a.5.5 0 1 1-1 0V18h-2.493a.5.5 0 1 1 0-1H17v-2.493a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class ProiconsDatabaseAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
