import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowDownLeftIcon],svg[jam-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.828 8.9h5.586a1 1 0 0 1 0 2h-8a.997.997 0 0 1-1-1v-8a1 1 0 1 1 2 0v5.585L9.192.707a1 1 0 1 1 1.415 1.414z"></svg:path>`,
})
export class JamArrowDownLeftIcon {
  readonly viewBox = input("-6.5 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
