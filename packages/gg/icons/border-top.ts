import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBorderTopIcon],svg[gg-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".3" d="M8 16h8V9h3v10H5V9h3z"></svg:path><svg:path d="M5 7h14V4H5z"></svg:path></svg:g>`,
})
export class GgBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
