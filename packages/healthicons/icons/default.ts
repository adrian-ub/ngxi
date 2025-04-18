import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDefaultIcon],svg[healthicons-default-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 9v26a3 3 0 0 0 3 3h11.832A10 10 0 0 1 22 34c0-5.523 4.477-10 10-10q1.03.002 2 .2V9a3 3 0 0 0-3-3H11a3 3 0 0 0-3 3m5 4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"></svg:path><svg:path d="M32 42a8 8 0 1 0 0-16a8 8 0 0 0 0 16m2.567-11.707a1 1 0 0 1 1.414 1.414l-.79.791l-1.415-1.414zM28 36.86l5.069-5.07l1.414 1.415l-5.069 5.069H28z"></svg:path></svg:g>`,
})
export class HealthiconsDefaultIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
