import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShowersLineIcon],svg[ri-showers-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.93a8 8 0 1 1 11.458-9.831A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-10 4.472zM7 16h2v4H7zm8 0h2v4h-2zm-4 3h2v4h-2z"></svg:path>`,
})
export class RiShowersLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
