import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconReplenishmentOutlineIcon],svg[lsicon-replenishment-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2.5 5v8.5h11V5m-11 0L5 2.5h6L13.5 5m-11 0h11m-8 4h5M8 6.5v5"></svg:path>`,
})
export class LsiconReplenishmentOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
