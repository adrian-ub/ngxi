import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSidebarSimpleBoldIcon],svg[ph-sidebar-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 60h32v136H44Zm168 136H100V60h112Z"></svg:path>`,
})
export class PhSidebarSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
