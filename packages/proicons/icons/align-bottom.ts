import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAlignBottomIcon],svg[proicons-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 21.25h18.5"></svg:path><svg:rect width="6" height="10" rx="2" transform="matrix(-1 0 0 1 19.75 7.75)"></svg:rect><svg:rect width="6" height="15" rx="2" transform="matrix(-1 0 0 1 10.25 2.75)"></svg:rect></svg:g>`,
})
export class ProiconsAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
