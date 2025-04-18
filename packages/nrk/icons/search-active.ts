import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSearchActiveIcon],svg[nrk-search-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 18a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m0-3a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m4.205 3l3.032 5h3.51l-3.034-5z" clip-rule="evenodd"></svg:path>`,
})
export class NrkSearchActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
