import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTrayIcon],svg[icon-park-outline-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="30" x="24.762" y="3.243" rx="2" transform="rotate(45 24.762 3.243)"></svg:rect><svg:path d="m38.197 16.678l4.242-4.243l-7.07-7.071l-4.244 4.242M18 21h12m-12 6h4m6 0h2"></svg:path></svg:g>`,
})
export class IconParkOutlineTrayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
