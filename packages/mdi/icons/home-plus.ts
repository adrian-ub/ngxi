import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomePlusIcon],svg[mdi-home-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM12 3l10 9h-4a6.005 6.005 0 0 0-5.66 8H5v-8H2z"></svg:path>`,
})
export class MdiHomePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
