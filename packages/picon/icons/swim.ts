import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSwimIcon],svg[picon-swim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4V2h2v2M3 4L1 5l2-5h4v1H4M0 8V7l2-1l2 1l2-1l2 1v1M2 5L0 6V5l2-1l2 1l2-1l2 1v1L6 5L4 6"></svg:path>`,
})
export class PiconSwimIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
