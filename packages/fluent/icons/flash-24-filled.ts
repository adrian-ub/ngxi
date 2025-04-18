import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlash24FilledIcon],svg[fluent-flash-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.425 2.83A1.25 1.25 0 0 1 8.603 2h6.453a1.25 1.25 0 0 1 1.186 1.645L14.79 8h3.96c1.103 0 1.665 1.327.897 2.12L8.586 21.536c-1.054 1.088-2.872.106-2.541-1.372l1.27-5.668l-1.57-.006a1.75 1.75 0 0 1-1.641-2.337z"></svg:path>`,
})
export class FluentFlash24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
