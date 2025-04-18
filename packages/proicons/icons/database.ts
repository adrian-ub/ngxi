import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsDatabaseIcon],svg[proicons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 6.25c0 1.933-3.246 3.5-7.25 3.5s-7.25-1.567-7.25-3.5m14.5 0c0-1.933-3.246-3.5-7.25-3.5s-7.25 1.567-7.25 3.5m14.5 0V12M4.75 6.25V12m0 0v5.75c0 1.933 3.246 3.5 7.25 3.5s7.25-1.567 7.25-3.5V12m-14.5 0c0 1.933 3.246 3.5 7.25 3.5s7.25-1.567 7.25-3.5"></svg:path>`,
})
export class ProiconsDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
