import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDidiGreaterChinaIcon],svg[arcticons-didi-greater-china-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.805 8.3H36.36v7.306h6.55s4.255 17.342-10.068 22.19c-9.568 3.24-16.858 2.367-22.516-2.76C2.918 28.325 4.602 8.224 4.805 8.3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.22 15.877c-.448 7.107-.36 13.794 6.82 15.534"></svg:path>`,
})
export class ArcticonsDidiGreaterChinaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
