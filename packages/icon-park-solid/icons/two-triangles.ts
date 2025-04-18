import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoTrianglesIcon],svg[icon-park-solid-two-triangles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m24 4l17.32 30H6.68z"></svg:path><svg:path fill="currentColor" d="m24 44l17.32-30H6.68z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 4l17.32 30H6.68z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 44l17.32-30H6.68z"></svg:path></svg:g>`,
})
export class IconParkSolidTwoTrianglesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
