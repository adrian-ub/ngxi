import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsPlusIcon],svg[gridicons-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></svg:path>`,
})
export class GridiconsPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
