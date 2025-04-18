import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPinEndIcon],svg[tabler-pin-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 11V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9m4-2a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M10 13V9h4m0 4l-4-4"></svg:path></svg:g>`,
})
export class TablerPinEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
