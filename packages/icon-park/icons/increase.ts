import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIncreaseIcon],svg[icon-park-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M41 25C41 34.9411 32.9411 43 23 43C13.0589 43 5 34.9411 5 25C5 15.0589 13.0589 7 23 7"></svg:path><svg:path d="M12 28.5C20.5 28.5 24 28 31 19"></svg:path><svg:path d="M23 19H31V27"></svg:path><svg:path d="M31 5V9.5"></svg:path><svg:path d="M43.5 17L39 17"></svg:path><svg:path d="M40.8892 7L37.0001 10.8891"></svg:path></svg:g>`,
})
export class IconParkIncreaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
