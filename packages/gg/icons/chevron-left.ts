import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronLeftIcon],svg[gg-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.243 6.343L14.828 4.93L7.758 12l7.07 7.071l1.415-1.414L10.586 12z"></svg:path>`,
})
export class GgChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
