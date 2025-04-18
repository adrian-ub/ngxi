import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPointerPlusIcon],svg[tabler-pointer-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.941 13.385l-1.163-1.163l3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093l1.23 1.23M16 19h6m-3-3v6"></svg:path>`,
})
export class TablerPointerPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
