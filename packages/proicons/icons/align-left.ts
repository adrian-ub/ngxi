import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAlignLeftIcon],svg[proicons-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 2.75v18.5"></svg:path><svg:rect width="6" height="10" rx="2" transform="matrix(0 -1 -1 0 16.25 19.75)"></svg:rect><svg:rect width="6" height="15" rx="2" transform="matrix(0 -1 -1 0 21.25 10.25)"></svg:rect></svg:g>`,
})
export class ProiconsAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
