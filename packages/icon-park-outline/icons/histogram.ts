import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHistogramIcon],svg[icon-park-outline-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M4 44h40"></svg:path><svg:path stroke-linejoin="round" d="M7 44s5.313-34 17-34s17 34 17 34M4 4v40"></svg:path></svg:g>`,
})
export class IconParkOutlineHistogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
