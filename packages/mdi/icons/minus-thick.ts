import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMinusThickIcon],svg[mdi-minus-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14H4v-4h16"></svg:path>`,
})
export class MdiMinusThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
