import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLifebuoyOutlineIcon],svg[teenyicons-lifebuoy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.329 10.328a4 4 0 0 1-5.657 0m5.657 0a4 4 0 0 0 0-5.656m0 5.656l2.12 2.122m-7.777-2.122a4 4 0 0 1 0-5.656m0 5.656L2.55 12.45m7.779-7.778a4 4 0 0 0-5.657 0m5.657 0l2.12-2.122M4.673 4.672L2.55 2.55m9.9 9.9a7 7 0 0 1-9.9 0m9.9 0a7 7 0 0 0 0-9.9m-9.9 9.9a7 7 0 0 1 0-9.9m9.9 0a7 7 0 0 0-9.9 0"></svg:path>`,
})
export class TeenyiconsLifebuoyOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
