import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusChevronUpIcon],svg[nimbus-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.05 5.82l5.56 5.66l.89-.87L8.91 4.9a1.18 1.18 0 0 0-.86-.39a1.13 1.13 0 0 0-.85.39l-5.7 5.7l.88.89z"></svg:path>`,
})
export class NimbusChevronUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
