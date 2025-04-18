import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAlignRightIcon],svg[proicons-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 2.75v18.5"></svg:path><svg:rect width="6" height="10" x="7.75" y="19.75" rx="2" transform="rotate(-90 7.75 19.75)"></svg:rect><svg:rect width="6" height="15" x="2.75" y="10.25" rx="2" transform="rotate(-90 2.75 10.25)"></svg:rect></svg:g>`,
})
export class ProiconsAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
