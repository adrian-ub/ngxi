import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerForbidFilledIcon],svg[tabler-forbid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M9.613 8.21a1 1 0 0 0-1.32 1.497l6 6l.094.083a1 1 0 0 0 1.32-1.497l-6-6z"></svg:path>`,
})
export class TablerForbidFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
