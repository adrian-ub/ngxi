import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticBrokenIcon],svg[solar-link-broken-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10 5.049l.367-.343c2.432-2.275 6.376-2.275 8.809 0M16.974 15l2.202-2.059c1.168-1.092 1.775-2.51 1.821-3.941M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03c-2.398-2.293-2.456-6.033-.091-8.358l.905-.89m.941-7L7.5 5.205m-3.998.882L9.05 8.795"></svg:path>`,
})
export class SolarLinkBrokenMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
