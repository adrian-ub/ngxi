import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumFaceSmileIcon],svg[circum-face-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.942A9.942 9.942 0 1 1 21.942 12A9.953 9.953 0 0 1 12 21.942m0-18.884A8.942 8.942 0 1 0 20.942 12A8.95 8.95 0 0 0 12 3.058"></svg:path><svg:path fill="currentColor" d="M16.693 13.744a5.041 5.041 0 0 1-9.387 0c-.249-.59-1.111-.081-.863.505a6.026 6.026 0 0 0 11.114 0c.247-.586-.614-1.1-.864-.505"></svg:path><svg:circle cx="9" cy="9.011" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="9.011" r="1.25" fill="currentColor"></svg:circle>`,
})
export class CircumFaceSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
