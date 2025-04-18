import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStackPushIcon],svg[tabler-stack-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m6 10l-2 1l8 4l8-4l-2-1M4 15l8 4l8-4M12 4v7"></svg:path><svg:path d="m15 8l-3 3l-3-3"></svg:path></svg:g>`,
})
export class TablerStackPushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
