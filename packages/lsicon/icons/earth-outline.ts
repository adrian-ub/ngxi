import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconEarthOutlineIcon],svg[lsicon-earth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 8A6.5 6.5 0 0 1 8 14.5M14.5 8A6.5 6.5 0 0 0 8 1.5M14.5 8c0 1.657-2.91 3-6.5 3S1.5 9.657 1.5 8m13 0c0-1.657-2.91-3-6.5-3S1.5 6.343 1.5 8M8 14.5A6.5 6.5 0 0 1 1.5 8M8 14.5c1.657 0 3-2.91 3-6.5S9.657 1.5 8 1.5m0 13c-1.657 0-3-2.91-3-6.5s1.343-6.5 3-6.5M1.5 8A6.5 6.5 0 0 1 8 1.5"></svg:path>`,
})
export class LsiconEarthOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
