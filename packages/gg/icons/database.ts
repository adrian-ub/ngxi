import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDatabaseIcon],svg[gg-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 9V7h2v2zm4 0h10V7H9zm-4 6v2h2v-2zm14 2H9v-2h10z"></svg:path><svg:path fill-rule="evenodd" d="M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1h16a1 1 0 0 1 1 1v5H3V6a1 1 0 0 1 1-1m-1 8v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
