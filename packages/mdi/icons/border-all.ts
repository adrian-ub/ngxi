import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBorderAllIcon],svg[mdi-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-6V5h6m0 14h-6v-6h6m-8-2H5V5h6m0 14H5v-6h6m-8 8h18V3H3z"></svg:path>`,
})
export class MdiBorderAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
