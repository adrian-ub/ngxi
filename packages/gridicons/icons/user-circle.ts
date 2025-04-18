import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsUserCircleIcon],svg[gridicons-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m0 18.5a8.5 8.5 0 1 1 .001-17.001A8.5 8.5 0 0 1 12 20.5m0-8c-3.038 0-5.5 1.728-5.5 3.5s2.462 3.5 5.5 3.5s5.5-1.728 5.5-3.5s-2.462-3.5-5.5-3.5m0-.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class GridiconsUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
