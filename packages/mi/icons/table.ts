import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miTableIcon],svg[mi-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm9 0H4v3h7zm2 0v3h7v-3zm7 5h-7v3h7zm0 5h-7v3h7zm-9 3v-3H4v3zm-7-5h7v-3H4z"></svg:path>`,
})
export class MiTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
