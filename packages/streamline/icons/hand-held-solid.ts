import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldSolidIcon],svg[streamline-hand-held-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.497 1.747c0-.113.092-.205.205-.205h8.596c.113 0 .204.092.204.205v8.727H2.497zM2.702.042C1.761.042.997.806.997 1.747v10.505c0 .942.764 1.706 1.705 1.706h8.596c.941 0 1.704-.764 1.704-1.706V1.747c0-.941-.763-1.705-1.705-1.705zm1.91 2.594a.75.75 0 1 0 0 1.5h4.776a.75.75 0 0 0 0-1.5zm-.75 3.374a.75.75 0 0 1 .75-.75h4.776a.75.75 0 0 1 0 1.5H4.612a.75.75 0 0 1-.75-.75m.75 1.874a.75.75 0 1 0 0 1.5h2.866a.75.75 0 1 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHandHeldSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
