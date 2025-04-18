import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneScaleOneIcon],svg[icon-park-twotone-scale-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTScaleOne0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M18 14H5V9l13-5h12l13 5v5H30"></svg:path><svg:path fill="#555" d="M18 4h12v40H18z"></svg:path><svg:path stroke-linecap="round" d="M18 12h4m-4 18h5m-5-12h5m-5 6h4m-4 12h4m-4-26v28"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTScaleOne0)"></svg:path>`,
})
export class IconParkTwotoneScaleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
