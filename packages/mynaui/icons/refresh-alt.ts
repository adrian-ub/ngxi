import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRefreshAltIcon],svg[mynaui-refresh-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.5 8c1.392-3.179 4.823-5 8.522-5c4.679 0 8.525 3.552 8.978 8.1"></svg:path><svg:path d="M7.511 8.4h-3.97a.54.54 0 0 1-.54-.54V3.9M20.5 16c-1.392 3.179-4.823 5-8.522 5C7.299 21 3.453 17.448 3 12.9"></svg:path><svg:path d="M16.489 15.6h3.97a.54.54 0 0 1 .541.54v3.96"></svg:path></svg:g>`,
})
export class MynauiRefreshAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
