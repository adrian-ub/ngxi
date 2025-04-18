import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowsSplitIcon],svg[tabler-arrows-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 17h-8l-3.5-5H3m18-5h-8l-3.495 5"></svg:path><svg:path d="m18 10l3-3l-3-3m0 16l3-3l-3-3"></svg:path></svg:g>`,
})
export class TablerArrowsSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
