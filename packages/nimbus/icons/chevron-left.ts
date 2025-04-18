import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusChevronLeftIcon],svg[nimbus-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.82 8l5.66-5.56l-.87-.89L4.9 7.09a1.18 1.18 0 0 0-.39.91a1.13 1.13 0 0 0 .39.85l5.7 5.7l.89-.88z"></svg:path>`,
})
export class NimbusChevronLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
