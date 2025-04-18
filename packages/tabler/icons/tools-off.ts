import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerToolsOffIcon],svg[tabler-tools-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m16 12l4-4a2.828 2.828 0 1 0-4-4l-4 4m-2 2l-7 7v4h4l7-7m.5-8.5l4 4"></svg:path><svg:path d="M12 8L7 3M5 5L3 7l5 5M7 8L5.5 9.5M16 12l5 5m-2 2l-2 2l-5-5m4 1l-1.5 1.5M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerToolsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
