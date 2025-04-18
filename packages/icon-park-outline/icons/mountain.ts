import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMountainIcon],svg[icon-park-outline-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="m18 10l14 28H4z"></svg:path><svg:path stroke-linecap="round" d="m28 29l5.647-7L44 38H32M12 22h12m-10-4l-4 8m12-8l4 8"></svg:path></svg:g>`,
})
export class IconParkOutlineMountainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
