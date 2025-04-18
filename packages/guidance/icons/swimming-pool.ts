import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceSwimmingPoolIcon],svg[guidance-swimming-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 23.5a3 3 0 0 0 3-3a3 3 0 1 0 6 0a3 3 0 1 0 6 0a3 3 0 1 0 6 0a3 3 0 0 0 3 3M3 3v-.5a2 2 0 1 1 4 0v10c0 1.787.4 3.974 1.555 4.776c.272.189.614.224.945.224M13 3v-.5a2 2 0 1 1 4 0v10c0 1.787.4 3.974 1.555 4.776c.272.189.614.224.945.224M7 9.5h10m-10-4h10m-9.959 8h10"></svg:path>`,
})
export class GuidanceSwimmingPoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
