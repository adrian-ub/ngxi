import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBloomIcon],svg[icon-park-bloom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 32L18 42"></svg:path><svg:path d="M42 32L30 42"></svg:path><svg:path d="M24 32V44"></svg:path><svg:path fill="#2F88FF" d="M17 11L24 4L31 11L38 10C38 10 39 14.2386 39 17C39 27 30.5 32 24 32C17.5 32 9 27 9 17C9 14.2386 10 10 10 10L17 11Z"></svg:path></svg:g>`,
})
export class IconParkBloomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
