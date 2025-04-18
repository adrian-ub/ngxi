import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkUserLoggedinIcon],svg[nrk-user-loggedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18m0-2C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m0 17a6 6 0 0 1-6-6h12a6 6 0 0 1-6 6m3.465-4h-6.93c.692 1.196 1.984 2 3.465 2s2.773-.804 3.465-2" clip-rule="evenodd"></svg:path>`,
})
export class NrkUserLoggedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
