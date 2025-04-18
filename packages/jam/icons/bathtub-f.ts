import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBathtubFIcon],svg[jam-bathtub-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.487 2.897A3 3 0 0 1 11 5.857v2H5v-2c0-1.038.528-1.954 1.33-2.492A2 2 0 0 0 3 4.858v6h16a1 1 0 0 1 0 2v1a6 6 0 0 1-4 5.658V20a1 1 0 1 1-2 0v-.142H7V20a1 1 0 1 1-2 0v-.484a6 6 0 0 1-4-5.658v-1a1 1 0 0 1 0-2v-6a4 4 0 0 1 7.487-1.96z"></svg:path>`,
})
export class JamBathtubFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
