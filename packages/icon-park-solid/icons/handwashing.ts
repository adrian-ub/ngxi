import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHandwashingIcon],svg[icon-park-solid-handwashing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24h7v20H4z"></svg:path><svg:path fill="currentColor" d="M32 16c-1.5-3.5 4-10 4-10s5.5 6.5 4 10s-6.5 3.5-8 0m-1 26.5c-9 0-16-2.5-20-2.5V30c7 0 6.5-2.5 11-4s8 0 7.5 3s-5.5 6-5.5 6c8 0 8-2 12-5s8-2 8 1s-4 11.5-13 11.5"></svg:path></svg:g>`,
})
export class IconParkSolidHandwashingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
