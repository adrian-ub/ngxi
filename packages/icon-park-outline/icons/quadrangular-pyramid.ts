import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineQuadrangularPyramidIcon],svg[icon-park-outline-quadrangular-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24L24 4L4 24l20 20zM4 24h40"></svg:path><svg:path d="m24 44l-6-20l6-20m0 40l6-20l-6-20"></svg:path></svg:g>`,
})
export class IconParkOutlineQuadrangularPyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
