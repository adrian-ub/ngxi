import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBorderFullIcon],svg[carbon-border-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10h10v2H8zm0 5h6v2H8z"></svg:path><svg:path fill="currentColor" d="M29 29H3V3h26ZM5 27h22V5H5Z"></svg:path>`,
})
export class CarbonBorderFullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
