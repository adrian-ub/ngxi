import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBorderStyleIcon],svg[mdi-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h2v-2h-2m4 2h2v-2h-2M7 21h2v-2H7m4 2h2v-2h-2m8-2h2v-2h-2m0-2h2v-2h-2M3 3v18h2V5h16V3m-2 6h2V7h-2"></svg:path>`,
})
export class MdiBorderStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
