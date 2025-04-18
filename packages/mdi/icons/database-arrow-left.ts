import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDatabaseArrowLeftIcon],svg[mdi-database-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4s-3.58 4-8 4s-8-1.79-8-4m15.72 6.05c.18-.34.28-.69.28-1.05V9c0 2.21-3.58 4-8 4s-8-1.79-8-4v3c0 2.21 3.58 4 8 4c.65 0 1.28-.04 1.88-.11A5.99 5.99 0 0 1 19 13c.24 0 .5 0 .72.05m-6.62 4.91c-.36.04-.73.04-1.1.04c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4c.46 0 .9 0 1.33-.06A6 6 0 0 1 13 19c0-.36.04-.7.1-1.04M18 18v-2l-3 3l3 3v-2h4v-2z"></svg:path>`,
})
export class MdiDatabaseArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
