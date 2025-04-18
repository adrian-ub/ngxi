import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCardSimIcon],svg[zmdi-card-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 45v342q0 17-12.5 29.5T299 429H43q-18 0-30.5-12.5T0 387V131L128 3h171q17 0 29.5 12.5T341 45M107 365v-42H64v42zm170 0v-42h-42v42zm-170-85v-85H64v85zm85 85v-85h-43v85zm0-128v-42h-43v42zm85 43v-85h-42v85z"></svg:path>`,
})
export class ZmdiCardSimIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
