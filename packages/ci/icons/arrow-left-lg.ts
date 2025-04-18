import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowLeftLgIcon],svg[ci-arrow-left-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 12l5 5m-5-5l5-5m-5 5h18"></svg:path>`,
})
export class CiArrowLeftLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
