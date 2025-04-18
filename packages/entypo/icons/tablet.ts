import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoTabletIcon],svg[entypo-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H4C2.9 0 2 .899 2 2v16c0 1.1.9 2 2 2h12c1.101 0 2-.9 2-2V2c0-1.101-.899-2-2-2m-6 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1c.689 0 1.25.447 1.25 1s-.561 1-1.25 1m6-3H4V2h12z"></svg:path>`,
})
export class EntypoTabletIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
