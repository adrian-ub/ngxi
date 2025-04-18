import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapIcon],svg[tdesign-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5v15.574l-7 4.084l-6.074-3.544L2 21.5V5.926zm1 15.084l4 2.333V7.074l-4-2.333zM8 4.74L4 7.074V18.5l4-1.667zm8 2.426v12.092l4-2.333V5.5z"></svg:path>`,
})
export class TdesignMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
