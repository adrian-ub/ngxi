import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrangeBringToFrontIcon],svg[mdi-arrange-bring-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v4H9V4H4v5h2v2H2zm20 11v9h-9v-4h2v2h5v-5h-2v-2zM8 8h8v8H8z"></svg:path>`,
})
export class MdiArrangeBringToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
