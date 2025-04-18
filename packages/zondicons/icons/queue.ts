import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsQueueIcon],svg[zondicons-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h20v4H0zm0 8h20v2H0zm0 6h20v2H0z"></svg:path>`,
})
export class ZondiconsQueueIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
