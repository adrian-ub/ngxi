import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAppRemoveIcon],svg[proicons-app-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="6.5" height="6.5" rx="2" transform="matrix(1 0 0 -1 3.75 20.25)"></svg:rect><svg:path d="M20.25 20.25L17 17m0 0l-3.25-3.25M17 17l-3.25 3.25M17 17l3.25-3.25"></svg:path><svg:rect width="6.5" height="6.5" rx="2" transform="matrix(1 0 0 -1 3.75 10.25)"></svg:rect><svg:rect width="6.5" height="6.5" rx="2" transform="matrix(1 0 0 -1 13.75 10.25)"></svg:rect></svg:g>`,
})
export class ProiconsAppRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
