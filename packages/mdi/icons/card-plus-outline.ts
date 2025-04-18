import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardPlusOutlineIcon],svg[mdi-card-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm-7 3H3V6h16v7h2V6c0-1.11-.89-2-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11z"></svg:path>`,
})
export class MdiCardPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
