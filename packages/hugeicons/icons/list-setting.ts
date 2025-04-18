import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsListSettingIcon],svg[hugeicons-list-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 19.857V21m0-1.143a2.93 2.93 0 0 1-2.427-1.272m2.427 1.272a2.93 2.93 0 0 0 2.427-1.272M16.5 14.143a2.93 2.93 0 0 1 2.427 1.272M16.5 14.143a2.93 2.93 0 0 0-2.427 1.272m2.427-1.272V13m3.5 1.714l-1.073.701M13 19.285l1.073-.7M13 14.715l1.073.7M20 19.285l-1.073-.7m0-3.17a2.8 2.8 0 0 1 0 3.17m-4.854-3.17a2.8 2.8 0 0 0 0 3.17M4 3h16M4 9h16M4 15h5" color="currentColor"></svg:path>`,
})
export class HugeiconsListSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
