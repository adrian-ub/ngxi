import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAlignVerticalCentersIcon],svg[proicons-align-vertical-centers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 19.75v1.5m0-11v3.5m0-11v1.5"></svg:path><svg:rect width="6" height="10" x="7" y="19.75" rx="2" transform="rotate(-90 7 19.75)"></svg:rect><svg:rect width="6" height="15" x="4.5" y="10.25" rx="2" transform="rotate(-90 4.5 10.25)"></svg:rect></svg:g>`,
})
export class ProiconsAlignVerticalCentersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
