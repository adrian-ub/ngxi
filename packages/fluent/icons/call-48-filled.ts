import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCall48FilledIcon],svg[fluent-call-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.095 6.894c-.78-1.559-2.41-2.82-4.412-2.597c-1.791.199-4.45.865-6.263 3.049c-1.861 2.243-2.555 5.741-1.126 10.982c1.526 5.591 3.792 11.103 6.609 15.55c2.796 4.415 6.24 7.949 10.191 9.304c3.494 1.198 6.166.698 8.115-.618c1.88-1.269 2.912-3.178 3.446-4.5c.598-1.48.204-3.021-.576-4.157l-2.877-4.184a5.25 5.25 0 0 0-5.892-2.037l-3.976 1.243a.68.68 0 0 1-.723-.187c-1.77-2.073-3.753-4.964-4.292-7.89a.33.33 0 0 1 .033-.23c.585-.983 1.592-2.097 2.593-3.072c1.697-1.652 2.34-4.278 1.22-6.516z"></svg:path>`,
})
export class FluentCall48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
