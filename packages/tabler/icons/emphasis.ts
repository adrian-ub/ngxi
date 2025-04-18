import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEmphasisIcon],svg[tabler-emphasis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5H8v10h8m-1-5H8M6 20v.01m4-.01v.01m4-.01v.01m4-.01v.01"></svg:path>`,
})
export class TablerEmphasisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
