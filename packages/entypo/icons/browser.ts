import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoBrowserIcon],svg[entypo-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M4.5 3.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-2.75.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M18 16H2V7h16zm0-11H6V4h12.019z"></svg:path>`,
})
export class EntypoBrowserIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
