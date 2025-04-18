import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBerlinIcon],svg[hugeicons-berlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 5.3h7m6 0h7m0 4.4h-5.56c-1.13 0-1.694 0-1.994-.403c-.3-.402-.189-1.011.032-2.228l.044-.238c.22-1.217.332-1.826.031-2.228c-.3-.403-.864-.403-1.993-.403h-1.12c-1.13 0-1.693 0-1.994.403c-.3.402-.189 1.011.032 2.228l.044.238c.22 1.217.332 1.826.032 2.228S8.689 9.7 7.56 9.7H2m11.5-5.5c0-.55.2-1.76 1-2.2m-4 2.2c0-.55-.2-1.76-1-2.2M3 5.3V22M21 5.3V22M18 9.7V22m-3 0V9.7H9V22M6 9.7V22m-4 0h20" color="currentColor"></svg:path>`,
})
export class HugeiconsBerlinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
