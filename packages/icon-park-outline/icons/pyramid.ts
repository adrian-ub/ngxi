import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePyramidIcon],svg[icon-park-outline-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="m21 12l17 30H4z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M36.5 42H44l-8-14l-3 5M21 12l-8 30"></svg:path></svg:g>`,
})
export class IconParkOutlinePyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
