import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCouchIcon],svg[picon-couch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5q-2-2 1-1v1.5h4V4q3-1 1 1v2H1m1.5-3L1 3q0-1 2-1h2q2 0 2 1L5.5 4v1h-3"></svg:path>`,
})
export class PiconCouchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
