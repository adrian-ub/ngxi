import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneShowerHeadIcon],svg[icon-park-twotone-shower-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTShowerHead0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M27 20v2H9v-2c0-3.314 4.03-6 9-6s9 2.686 9 6"></svg:path><svg:path d="M42 44V12.5C42 7.806 36.627 4 30 4s-12 3.806-12 8.5V14m0 15v-1m-7.829.03l-.342.94M4.171 43.03l-.342.94M18 44v-1m0-6v-2m-10.658.06l-.684 1.88"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTShowerHead0)"></svg:path>`,
})
export class IconParkTwotoneShowerHeadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
