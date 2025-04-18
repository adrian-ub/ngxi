import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStackFrontIcon],svg[tabler-stack-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" d="M12 4L4 8l8 4l8-4z"></svg:path><svg:path d="m8 14l-4 2l8 4l8-4l-4-2"></svg:path><svg:path d="m8 10l-4 2l8 4l8-4l-4-2"></svg:path></svg:g>`,
})
export class TablerStackFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
