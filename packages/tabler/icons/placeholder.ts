import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlaceholderIcon],svg[tabler-placeholder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 20.415A8 8 0 1 0 13 5h-3"></svg:path><svg:path d="m13 8l-3-3l3-3M7 17l4-4l-4-4l-4 4z"></svg:path></svg:g>`,
})
export class TablerPlaceholderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
