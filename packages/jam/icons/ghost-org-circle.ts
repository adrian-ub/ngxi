import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGhostOrgCircleIcon],svg[jam-ghost-org-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M5.024 12.655h3.92v1.887h-3.92zm5.881 0h3.918v1.887h-3.918zM5.021 8.881h9.802v1.887H5.021zm.003-3.774h5.881v1.887H5.024zm7.841 0h1.96v1.887h-1.96z"></svg:path></svg:g>`,
})
export class JamGhostOrgCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
