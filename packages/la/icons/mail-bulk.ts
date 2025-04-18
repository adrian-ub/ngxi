import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMailBulkIcon],svg[la-mail-bulk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v10H2v13h17v-4h11V11h-7V5zm2 2h13v4h-9v4H8zm6 6h14v9h-9v-7h-5zm9 2v2h3v-2zM4 17h13v1.113l-6.04 3.754a.88.88 0 0 1-.92 0L4 18.115zm13 3.469V26H4v-5.53l4.982 3.096c.468.291.994.438 1.518.438s1.049-.147 1.516-.44z"></svg:path>`,
})
export class LaMailBulkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
