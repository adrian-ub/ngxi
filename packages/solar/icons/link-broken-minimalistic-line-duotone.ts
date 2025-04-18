import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticLineDuotoneIcon],svg[solar-link-broken-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m10 5.049l.367-.343c2.432-2.275 6.376-2.275 8.809 0s2.432 5.961 0 8.235L16.974 15M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03c-2.398-2.293-2.456-6.033-.091-8.358l.905-.89" opacity=".5"></svg:path><svg:path d="M6.587 3L7.5 5.205m-3.998.882L9.05 8.795"></svg:path></svg:g>`,
})
export class SolarLinkBrokenMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
