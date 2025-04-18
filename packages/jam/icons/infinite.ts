import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamInfiniteIcon],svg[jam-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 9a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M11 5.5a3.5 3.5 0 1 0 .668-2.057a6.5 6.5 0 0 0-1.001-1.887A5.5 5.5 0 1 1 10 8.663A5.5 5.5 0 1 1 11 5.5"></svg:path>`,
})
export class JamInfiniteIcon {
  readonly viewBox = input("-2 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
