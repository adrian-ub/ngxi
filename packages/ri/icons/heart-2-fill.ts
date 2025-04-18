import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHeart2FillIcon],svg[ri-heart-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.243 4.757a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 6.74-9.553L6.343 7.358l1.414 1.415L12 4.53l-.013-.014l.014.013a6 6 0 0 1 8.242.228"></svg:path>`,
})
export class RiHeart2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
