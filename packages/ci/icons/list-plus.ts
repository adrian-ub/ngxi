import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciListPlusIcon],svg[ci-list-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20h-2v-3h-3v-2h3v-3h2v3h3v2h-3v3Zm-7-3H2v-2h10v2Zm3-4H2v-2h13v2Zm0-4H2V7h13v2Z"></svg:path>`,
})
export class CiListPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
