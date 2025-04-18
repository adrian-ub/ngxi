import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkUserNotloggedinIcon],svg[nrk-user-notloggedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m-2 0C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5 0a6 6 0 0 0 12 0h-2a4 4 0 0 1-8 0z" clip-rule="evenodd"></svg:path>`,
})
export class NrkUserNotloggedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
