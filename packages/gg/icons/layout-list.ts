import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLayoutListIcon],svg[gg-layout-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7H7v2h2zm-2 6v-2h2v2zm0 2v2h2v-2zm4 0v2h6v-2zm6-2v-2h-6v2zm0-6v2h-6V7z"></svg:path>`,
})
export class GgLayoutListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
