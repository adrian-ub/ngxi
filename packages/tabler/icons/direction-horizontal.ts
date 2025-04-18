import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDirectionHorizontalIcon],svg[tabler-direction-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 9l-3 3l3 3m4-6l3 3l-3 3"></svg:path>`,
})
export class TablerDirectionHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
