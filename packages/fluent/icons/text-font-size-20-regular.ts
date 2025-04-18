import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFontSize20RegularIcon],svg[fluent-text-font-size-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3.5a.5.5 0 0 1 .468.324l2.996 7.99l.008.021l1.496 3.99a.5.5 0 1 1-.936.35L15.654 12.5h-5.307l-1.379 3.676a.5.5 0 0 1-.932.01L6.962 13.5H4.039l-1.075 2.686a.5.5 0 1 1-.928-.372l1.196-2.989l.008-.021l1.796-4.49a.5.5 0 0 1 .928 0l1.796 4.49l.009.021l.716 1.791l1.043-2.78l.008-.022l2.996-7.99A.5.5 0 0 1 13 3.5m-2.278 8h4.557L13 5.424zm-4.16 1L5.5 9.846L4.44 12.5z"></svg:path>`,
})
export class FluentTextFontSize20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
