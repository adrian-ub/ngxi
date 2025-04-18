import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVialIcon],svg[la-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.688 3.273L17.27 4.687l1.32 1.32L5.5 19.1c-2 2-2 5.4 0 7.4c1 1 2.4 1.5 3.7 1.5c1.4 0 2.7-.5 3.7-1.5l13.092-13.092l1.25 1.248l1.414-1.414zm1.304 4.135l4.6 4.6L20.6 16h-9.2zM9.4 18h9.2l-7.1 7.1c-1.3 1.3-3.3 1.3-4.6 0s-1.3-3.3 0-4.6z"></svg:path>`,
})
export class LaVialIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
