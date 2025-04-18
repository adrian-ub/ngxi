import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHddSolidIcon],svg[la-hdd-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.219 6L3 18.875V26h26v-7.125L25.781 6zM7.78 8h16.44l2.5 10H5.28zM5 20h22v4H5zm19 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaHddSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
