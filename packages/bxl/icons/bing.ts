import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlBingIcon],svg[bxl-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.71 3l3.593 1.264v12.645l5.061-2.919l-2.48-1.165l-1.566-3.897l7.974 2.802v4.073l-8.984 5.183l-3.595-2z"></svg:path>`,
})
export class BxlBingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
