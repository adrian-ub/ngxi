import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScaleOneIcon],svg[icon-park-solid-scale-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSScaleOne0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M18 14H5V9l13-5h12l13 5v5H30"></svg:path><svg:path fill="#fff" stroke="#fff" d="M18 4h12v40H18z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 12h4m-4 18h5m-5-12h5m-5 6h4m-4 12h4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 10v28"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSScaleOne0)"></svg:path>`,
})
export class IconParkSolidScaleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
