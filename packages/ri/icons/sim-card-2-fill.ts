import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSimCard2FillIcon],svg[ri-sim-card-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 16v-8H8v2h3v6zm-5-5v2h2v-2zm6 0v2h2v-2zm0-3v2h2v-2zm-6 6v2h2v-2zm6 0v2h2v-2z"></svg:path>`,
})
export class RiSimCard2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
