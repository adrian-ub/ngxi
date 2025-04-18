import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle748FilledIcon],svg[fluent-number-circle-7-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m-6.75-30h13.5a1.25 1.25 0 0 1 .945 2.069l-.012.013l-.046.055q-.064.076-.192.235c-.169.21-.416.528-.722.946a40 40 0 0 0-2.36 3.643c-1.816 3.153-3.878 7.644-4.884 13.02a1.25 1.25 0 1 1-2.458-.461c1.073-5.725 3.261-10.484 5.176-13.807a44 44 0 0 1 2.038-3.213H17.25a1.25 1.25 0 1 1 0-2.5"></svg:path>`,
})
export class FluentNumberCircle748FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
