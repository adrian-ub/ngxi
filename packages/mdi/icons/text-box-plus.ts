import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxPlusIcon],svg[mdi-text-box-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zm-5 3v-2H7v2zm5-6H7v2h7.69A5.98 5.98 0 0 0 12 18c0 1.09.29 2.12.8 3H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v7.8c-.88-.51-1.91-.8-3-.8l-1 .08zm0-2V7H7v2z"></svg:path>`,
})
export class MdiTextBoxPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
