import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStackBackwardIcon],svg[tabler-stack-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m14 12l6-3l-8-4l-8 4l6 3"></svg:path><svg:path fill="currentColor" d="m10 12l-6 3l8 4l8-4l-6-3l-2 1z"></svg:path></svg:g>`,
})
export class TablerStackBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
