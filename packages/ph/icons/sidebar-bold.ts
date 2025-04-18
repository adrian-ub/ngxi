import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSidebarBoldIcon],svg[ph-sidebar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 104h28v20H44Zm28-44v20H44V60Zm-28 88h28v48H44Zm168 48H96V60h116Z"></svg:path>`,
})
export class PhSidebarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
