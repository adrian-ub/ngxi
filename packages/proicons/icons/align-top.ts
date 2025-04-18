import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAlignTopIcon],svg[proicons-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 2.75h18.5"></svg:path><svg:rect width="6" height="10" x="19.75" y="16.25" rx="2" transform="rotate(180 19.75 16.25)"></svg:rect><svg:rect width="6" height="15" x="10.25" y="21.25" rx="2" transform="rotate(180 10.25 21.25)"></svg:rect></svg:g>`,
})
export class ProiconsAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
