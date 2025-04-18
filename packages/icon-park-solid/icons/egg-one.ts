import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEggOneIcon],svg[icon-park-solid-egg-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" d="M29 22.133C29 30.97 23.627 36 17 36S5 30.97 5 22.133C5 11.163 11.373 4 17 4s12 7.163 12 18.133Z"></svg:path><svg:path d="M29 24.068c8.536.634 14 5.554 14 9.932c0 4.69-6.268 10-15.867 10c-6.773 0-10.99-3.436-11.932-8"></svg:path></svg:g>`,
})
export class IconParkSolidEggOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
