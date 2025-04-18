import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewSequentialIcon],svg[mdi-view-sequential-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h18v4H3zm0 5h18v4H3zm0 5h18v4H3z"></svg:path>`,
})
export class MdiViewSequentialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
