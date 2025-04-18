import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkInfoIcon],svg[nrk-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 11c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m0-13.8a1.2 1.2 0 1 0 0-2.4a1.2 1.2 0 0 0 0 2.4m1 1.8v6h-2v-6z" clip-rule="evenodd"></svg:path>`,
})
export class NrkInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
