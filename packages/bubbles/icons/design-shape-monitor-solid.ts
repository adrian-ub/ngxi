import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDesignShapeMonitorSolidIcon],svg[bubbles-design-shape-monitor-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 1.5A1.5 1.5 0 0 0 22.5 0h-21A1.5 1.5 0 0 0 0 1.5v16A1.5 1.5 0 0 0 1.5 19h21a1.5 1.5 0 0 0 1.5-1.5zm-2 13a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5zm-7.65 6.18a.5.5 0 0 0-.35-.18h-4a.53.53 0 0 0-.38.18l-2.1 2.53A.5.5 0 0 0 8 24h8a.5.5 0 0 0 .41-.79z"></svg:path><svg:path d="M13 9.9a3.62 3.62 0 1 0-3.62 3.62A3.63 3.63 0 0 0 13 9.9M9.44 7.78A2.12 2.12 0 1 1 7.29 9.9a2.13 2.13 0 0 1 2.15-2.12"></svg:path><svg:path d="M17 3.25h-6a1.22 1.22 0 0 0-1.25 1.22v.46a.75.75 0 0 0 1.5 0a.18.18 0 0 1 .18-.18h4.82a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H14.7a.75.75 0 1 0 0 1.5H17a1.22 1.22 0 0 0 1.22-1.22V4.47A1.22 1.22 0 0 0 17 3.25"></svg:path></svg:g>`,
})
export class BubblesDesignShapeMonitorSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
