import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiFitnessCentre11Icon],svg[maki-fitness-centre-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7 6H4V5h3zM2 3v1H1v1a.5.5 0 0 0 0 1v1h1v1h1.5V3zm8 2V4H9V3H7.5v5H9V7h1V6a.5.5 0 0 0 0-1z" fill="currentColor"></svg:path>`,
})
export class MakiFitnessCentre11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
