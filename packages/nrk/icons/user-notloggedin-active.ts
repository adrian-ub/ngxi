import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkUserNotloggedinActiveIcon],svg[nrk-user-notloggedin-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M6 12a6 6 0 0 0 12 0h-2a4 4 0 0 1-8 0z" clip-rule="evenodd"></svg:path>`,
})
export class NrkUserNotloggedinActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
