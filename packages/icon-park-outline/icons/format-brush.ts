import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFormatBrushIcon],svg[icon-park-outline-format-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 5H6v15h28z"></svg:path><svg:path stroke-linecap="round" d="M34.025 12H43v16.101l-24 3.1V43"></svg:path></svg:g>`,
})
export class IconParkOutlineFormatBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
