import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLandscapeSettingIcon],svg[streamline-landscape-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 12h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1"></svg:path><svg:path d="M7 5.714a1.029 1.029 0 1 0 0-2.058a1.029 1.029 0 0 0 0 2.058"></svg:path><svg:path d="M8.8 7.514a1.8 1.8 0 1 0-3.6 0v.772h.771l.257 2.058h1.544l.257-2.058H8.8z"></svg:path></svg:g>`,
})
export class StreamlineLandscapeSettingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
