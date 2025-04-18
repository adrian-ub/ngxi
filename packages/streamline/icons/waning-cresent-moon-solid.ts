import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWaningCresentMoonSolidIcon],svg[streamline-waning-cresent-moon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 0a7 7 0 0 0 0 14h.004a7.1 7.1 0 0 0 2.657-.538a.5.5 0 0 0 .061-.894A6.5 6.5 0 0 1 8.5 7a6.5 6.5 0 0 1 3.194-5.568a.5.5 0 0 0-.063-.893A7.1 7.1 0 0 0 9.006 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWaningCresentMoonSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
