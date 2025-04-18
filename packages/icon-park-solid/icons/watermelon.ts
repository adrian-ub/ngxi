import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWatermelonIcon],svg[icon-park-solid-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWatermelon0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M23 34c11.046 0 20-8.954 20-20H3c0 11.046 8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M23 23v3m-6.364-5.636l-2.121 2.121m14.849-2.121l2.122 2.121"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWatermelon0)"></svg:path>`,
})
export class IconParkSolidWatermelonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
