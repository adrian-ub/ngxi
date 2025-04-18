import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psXingIcon],svg[ps-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277 462L174 282L334 2h108L282 282l103 180zM108 323l80-132l-60-105H26l60 105L6 323z"></svg:path>`,
})
export class PsXingIcon {
  readonly viewBox = input("0 0 448 488")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
