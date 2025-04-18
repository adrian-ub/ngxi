import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPotIcon],svg[mdi-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-7H3v-2h18v2h-2z"></svg:path>`,
})
export class MdiPotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
