import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPyramidIcon],svg[tabler-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.105 21.788a2 2 0 0 0 1.789 0l8.092-4.054c.538-.27.718-.951.385-1.452l-8.54-13.836a1 1 0 0 0-1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452zM12 2v20"></svg:path>`,
})
export class TablerPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
