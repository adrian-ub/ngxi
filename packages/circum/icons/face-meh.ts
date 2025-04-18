import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumFaceMehIcon],svg[circum-face-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.942A9.942 9.942 0 1 1 21.942 12A9.953 9.953 0 0 1 12 21.942m0-18.884A8.942 8.942 0 1 0 20.942 12A8.95 8.95 0 0 0 12 3.058"></svg:path><svg:circle cx="9.001" cy="8.99" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15.001" cy="8.99" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8.438 15.939h7.125a.5.5 0 0 0 0-1H8.438a.5.5 0 0 0 0 1"></svg:path>`,
})
export class CircumFaceMehIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
