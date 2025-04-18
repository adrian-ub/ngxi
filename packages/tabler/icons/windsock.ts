import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWindsockIcon],svg[tabler-windsock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3v18m0-10l12-1V6L6 5m4 .5v5M14 6v4M4 21h4"></svg:path>`,
})
export class TablerWindsockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
