import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkClockIcon],svg[nrk-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 11.586V6h-2v6.414l4.293 4.293l1.414-1.414z"></svg:path><svg:path fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m0-2a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class NrkClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
