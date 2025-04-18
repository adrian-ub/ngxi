import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFormatBrushIcon],svg[icon-park-solid-format-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M34 5H6v15h28z"></svg:path><svg:path stroke-linecap="round" d="M34.025 12H43v16.101l-24 3.1V43"></svg:path></svg:g>`,
})
export class IconParkSolidFormatBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
