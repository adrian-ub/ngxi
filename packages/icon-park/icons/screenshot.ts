import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScreenshotIcon],svg[icon-park-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 42C13.3137 42 16 39.3137 16 36C16 32.6863 13.3137 30 10 30C6.68629 30 4 32.6863 4 36C4 39.3137 6.68629 42 10 42Z"></svg:path><svg:path stroke-linecap="round" d="M40.0615 8C24 28.4331 15.8047 38.6805 14.2426 40.2426C11.8995 42.5858 8.10047 42.5858 5.75732 40.2426"></svg:path><svg:path fill="#2F88FF" d="M38 42C41.3137 42 44 39.3137 44 36C44 32.6863 41.3137 30 38 30C34.6863 30 32 32.6863 32 36C32 39.3137 34.6863 42 38 42Z"></svg:path><svg:path stroke-linecap="round" d="M42.2424 40.2426C39.8993 42.5858 36.1003 42.5858 33.7571 40.2426C32.195 38.6805 23.9998 28.446 8.00049 8"></svg:path></svg:g>`,
})
export class IconParkScreenshotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
