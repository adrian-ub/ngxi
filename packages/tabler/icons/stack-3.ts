import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStack3Icon],svg[tabler-stack-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L4 6l8 4l8-4zm-8 8l8 4l8-4M4 18l8 4l8-4M4 14l8 4l8-4"></svg:path>`,
})
export class TablerStack3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
