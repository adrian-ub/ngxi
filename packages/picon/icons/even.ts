import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEvenIcon],svg[picon-even-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6L6 2L4.5 6m-1 0L2 2L.5 6M7 7H5L4 6l2-4l2 4M3 7H1L0 6l2-4l2 4M0 2l3-1h2l3 1"></svg:path>`,
})
export class PiconEvenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
