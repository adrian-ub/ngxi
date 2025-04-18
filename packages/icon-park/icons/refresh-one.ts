import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRefreshOneIcon],svg[icon-park-refresh-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="10" height="10" x="17" y="24.071" fill="#2F88FF" stroke-linejoin="round" rx="2" transform="rotate(-45 17 24.071)"></svg:rect><svg:path d="M40.1201 16C37.1747 10.0731 31.0586 6 23.9912 6C16.9237 6 10.9454 10.0731 8 16"></svg:path><svg:path d="M8 8V16"></svg:path><svg:path d="M14.7803 16L8.00013 16"></svg:path><svg:path d="M8 32C10.9454 37.9269 17.0615 42 24.129 42C31.1964 42 37.1747 37.9269 40.1201 32"></svg:path><svg:path d="M40.1201 40V32"></svg:path><svg:path d="M33.3398 32L40.12 32"></svg:path></svg:g>`,
})
export class IconParkRefreshOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
