import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSpaceShipFillIcon],svg[ri-space-ship-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.88 18.049a35.9 35.9 0 0 1 8.531-16.32a.8.8 0 0 1 1.178 0q.25.27.412.456a35.9 35.9 0 0 1 8.119 15.864a44 44 0 0 1-6.584.875L12.447 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44 44 0 0 1-6.584-.875M12 14.995a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiSpaceShipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
