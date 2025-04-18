import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBlindsVerticalIcon],svg[mdi-blinds-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h20v-2zm-10 0V5h4v14z"></svg:path>`,
})
export class MdiBlindsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
