import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonEmailBoldIcon],svg[iconamoon-email-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M3 5V3.75c-.69 0-1.25.56-1.25 1.25zm18 0h1.25c0-.69-.56-1.25-1.25-1.25zM3 6.25h18v-2.5H3zM19.75 5v12h2.5V5zM19 17.75H5v2.5h14zM4.25 17V5h-2.5v12zm.75.75a.75.75 0 0 1-.75-.75h-2.5A3.25 3.25 0 0 0 5 20.25zM19.75 17a.75.75 0 0 1-.75.75v2.5A3.25 3.25 0 0 0 22.25 17z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m3 5l9 9l9-9"></svg:path></svg:g>`,
})
export class IconamoonEmailBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
