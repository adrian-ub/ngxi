import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHighlightIcon],svg[tabler-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19h4L17.5 8.5a2.828 2.828 0 1 0-4-4L3 15zm9.5-13.5l4 4m-12 4l4 4M21 15v4h-8l4-4z"></svg:path>`,
})
export class TablerHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
