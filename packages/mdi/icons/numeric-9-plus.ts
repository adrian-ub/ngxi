import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9PlusIcon],svg[mdi-numeric-9-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-2V9h-2v2h-2v2h2v2h2v-2h2zm-9-4H8c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H6v2h4c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2m0 4H8V9h2z"></svg:path>`,
})
export class MdiNumeric9PlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
