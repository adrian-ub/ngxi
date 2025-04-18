import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsListIcon],svg[lineicons-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.1 14.5h44.5c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H16.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3m44.4 15.3H16.1c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h44.5c1.2 0 2.3-1 2.3-2.3c-.1-1.3-1.1-2.3-2.4-2.3m0 19.7H16.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h44.5c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3"></svg:path><svg:circle cx="6.2" cy="12.2" r="2.7" fill="currentColor"></svg:circle><svg:circle cx="6.2" cy="32" r="2.7" fill="currentColor"></svg:circle><svg:circle cx="6.2" cy="51.8" r="2.7" fill="currentColor"></svg:circle>`,
})
export class LineiconsListIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
