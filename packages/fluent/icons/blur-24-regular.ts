import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBlur24RegularIcon],svg[fluent-blur-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a9 9 0 0 1 13.977-7.5H12a7.5 7.5 0 1 0 0 15V18h6.708A9 9 0 0 1 3 12m15.225-6.5H12V7h7.485a9 9 0 0 0-1.26-1.5M12 8h8.064q.358.717.584 1.5H12zm8.876 2.5H12V12h9q-.001-.767-.124-1.5M12 13h8.945a9 9 0 0 1-.297 1.5H12zm8.294 2.5H12V17h7.485a9 9 0 0 0 .81-1.5"></svg:path>`,
})
export class FluentBlur24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
