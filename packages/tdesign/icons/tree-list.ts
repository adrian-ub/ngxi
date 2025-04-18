import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTreeListIcon],svg[tdesign-tree-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22a4 4 0 0 1-1-7.874V9.874A4.002 4.002 0 0 1 6 2a4 4 0 0 1 1 7.874v4.252A4.002 4.002 0 0 1 6 22m-2-4a2 2 0 1 0 4 0a2 2 0 0 0-4 0M4 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8 12h7v2h-7zm0-7h10v2H12zm0-7h7v2h-7z"></svg:path>`,
})
export class TdesignTreeListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
