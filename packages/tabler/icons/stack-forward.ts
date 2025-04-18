import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStackForwardIcon],svg[tabler-stack-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" d="M12 5L4 9l8 4l8-4z"></svg:path><svg:path d="m10 12l-6 3l8 4l8-4l-6-3"></svg:path></svg:g>`,
})
export class TablerStackForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
