import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSortCollectorIcon],svg[arcticons-sort-collector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31.373" height="20.006" x="8.313" y="20.277" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.798" ry="7.798"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.365 27.18H7.193a2.693 2.693 0 1 0 0 5.386h1.12m11.275-2.692a2.693 2.693 0 1 0-5.386 0m7.105-16.367a2.693 2.693 0 1 0 5.386 0V10.41a2.693 2.693 0 1 0-5.386 0zM24 16.2v4.077m15.635 6.903h1.172a2.693 2.693 0 1 1 0 5.386h-1.12m-11.275-2.692a2.693 2.693 0 1 1 5.386 0m-1.629 10.403v-2.565a2.705 2.705 0 0 0-3.145-2.677c-1.584.264-3.489.513-5.024.513s-3.44-.25-5.024-.513a2.705 2.705 0 0 0-3.145 2.677v2.565"></svg:path>`,
})
export class ArcticonsSortCollectorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
