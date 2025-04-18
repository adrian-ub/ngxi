import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsBanIcon],svg[rivet-icons-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.109 4.523a6.002 6.002 0 0 0 8.368 8.368zM4.523 3.11l8.368 8.368A6.002 6.002 0 0 0 4.523 3.11m-2.18 10.548A8 8 0 1 1 13.657 2.343A8 8 0 0 1 2.343 13.657Z"></svg:path>`,
})
export class RivetIconsBanIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
