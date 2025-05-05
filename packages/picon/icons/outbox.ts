import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOutboxIcon],svg[picon-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 4l2-2l2 2M2 1L1 6h1l1 1h2l1-1h1L6 1M0 8V5l1-5h6l1 5v3"></svg:path>`,
})
export class PiconOutboxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
