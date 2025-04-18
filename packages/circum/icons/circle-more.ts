import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumCircleMoreIcon],svg[circum-circle-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12.001" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="16.001" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="8.001" cy="12" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 21.932A9.934 9.934 0 1 1 21.934 12A9.944 9.944 0 0 1 12 21.932m0-18.867A8.934 8.934 0 1 0 20.934 12A8.944 8.944 0 0 0 12 3.065"></svg:path>`,
})
export class CircumCircleMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
