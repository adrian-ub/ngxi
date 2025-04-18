import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCallAdd16FilledIcon],svg[fluent-call-add-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.5a.5.5 0 0 1 1 0V4h2.5a.5.5 0 1 1 0 1H13v2.5a.5.5 0 1 1-1 0V5H9.5a.5.5 0 0 1 0-1H12zM5.756 7.023l1.073-.984a2 2 0 0 0 .52-2.176L6.892 2.64a1.916 1.916 0 0 0-2.354-1.16c-1.716.525-3.035 2.12-2.629 4.014a15.3 15.3 0 0 0 1.746 4.475c.97 1.667 2.078 2.9 3.028 3.765c1.434 1.306 3.484.979 4.803-.25a1.9 1.9 0 0 0 .171-2.597l-.84-1.02A2 2 0 0 0 8.67 9.23l-1.388.437a6.6 6.6 0 0 1-.936-1.222a6.3 6.3 0 0 1-.59-1.422"></svg:path>`,
})
export class FluentCallAdd16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
