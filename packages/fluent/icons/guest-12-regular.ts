import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGuest12RegularIcon],svg[fluent-guest-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1A1.5 1.5 0 0 0 2 2.5v7A1.5 1.5 0 0 0 3.5 11h5A1.5 1.5 0 0 0 10 9.5v-7A1.5 1.5 0 0 0 8.5 1zM3 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm3 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4.5 7a.5.5 0 0 0-.5.5C4 8.5 5 9 6 9s2-.5 2-1.5a.5.5 0 0 0-.5-.5zm1-4.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentGuest12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
