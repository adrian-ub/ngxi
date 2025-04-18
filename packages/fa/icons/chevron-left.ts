import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faChevronLeftIcon],svg[fa-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1043 301L512 832l531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19L45 877q-19-19-19-45t19-45L787 45q19-19 45-19t45 19l166 166q19 19 19 45t-19 45"></svg:path>`,
})
export class FaChevronLeftIcon {
  readonly viewBox = input("0 0 1088 1664")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
