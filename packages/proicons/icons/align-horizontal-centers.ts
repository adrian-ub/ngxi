import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAlignHorizontalCentersIcon],svg[proicons-align-horizontal-centers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.75 12h1.5m-11 0h3.5m-11 0h1.5"></svg:path><svg:rect width="6" height="10" rx="2" transform="matrix(-1 0 0 1 19.75 7)"></svg:rect><svg:rect width="6" height="15" rx="2" transform="matrix(-1 0 0 1 10.25 4.5)"></svg:rect></svg:g>`,
})
export class ProiconsAlignHorizontalCentersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
