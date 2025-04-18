import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStackPopIcon],svg[tabler-stack-pop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9.5L4 11l8 4l8-4l-3-1.5M4 15l8 4l8-4m-8-4V4M9 7l3-3l3 3"></svg:path>`,
})
export class TablerStackPopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
