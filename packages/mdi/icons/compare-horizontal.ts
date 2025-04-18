import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCompareHorizontalIcon],svg[mdi-compare-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14H2v2h7v3l4-4l-4-4zm6-1v-3h7V8h-7V5l-4 4z"></svg:path>`,
})
export class MdiCompareHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
