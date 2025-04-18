import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowDownRightIcon],svg[jam-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.9 7.485V1.9a1 1 0 0 1 2 0v8a.997.997 0 0 1-1 1h-8a1 1 0 1 1 0-2h5.585L.707 2.121A1 1 0 0 1 2.121.707z"></svg:path>`,
})
export class JamArrowDownRightIcon {
  readonly viewBox = input("-6.5 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
