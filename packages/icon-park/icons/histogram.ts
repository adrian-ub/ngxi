import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHistogramIcon],svg[icon-park-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M4 44H44"></svg:path><svg:path stroke-linejoin="round" d="M7 44C7 44 12.3125 10 24 10C35.6875 10 41 44 41 44"></svg:path><svg:path stroke-linejoin="round" d="M4 4V44"></svg:path></svg:g>`,
})
export class IconParkHistogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
