import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBeakerIcon],svg[majesticons-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8 3a1 1 0 0 0 0 2v5.62l-4.789 5.387C1.491 17.942 2.865 21 5.454 21h13.092c2.589 0 3.962-3.058 2.242-4.993L16 10.62V5a1 1 0 1 0 0-2H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsBeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
