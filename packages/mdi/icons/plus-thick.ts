import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlusThickIcon],svg[mdi-plus-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h-6v6h-4v-6H4v-4h6V4h4v6h6z"></svg:path>`,
})
export class MdiPlusThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
