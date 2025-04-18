import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkDurationIcon],svg[nrk-duration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m0-2a9 9 0 1 1 0-18a9 9 0 0 1 0 18m1-15v6h-2V6z" clip-rule="evenodd"></svg:path>`,
})
export class NrkDurationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
