import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDatabaseIcon],svg[picon-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2c0-2 6-2 6 0S1 4 1 2m0 2q3 2 6 0v1Q4 7 1 5m0 1q3 2 6 0v1Q4 9 1 7"></svg:path>`,
})
export class PiconDatabaseIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
