import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPyramidIcon],svg[icon-park-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 12L38 42H4L21 12Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M36.5 42H44L36 28L33 33"></svg:path><svg:path stroke-linecap="round" d="M21 12L13 42"></svg:path></svg:g>`,
})
export class IconParkPyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
