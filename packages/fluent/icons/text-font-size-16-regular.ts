import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFontSize16RegularIcon],svg[fluent-text-font-size-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.97 2.33a.5.5 0 0 0-.94 0l-3.562 9.794l-.335-.806l-.009-.02l-1.662-3.99a.5.5 0 0 0-.923 0l-1.663 3.99l-.009.02l-.828 1.99a.5.5 0 1 0 .923.384L2.667 12h2.666l.705 1.69l.004.01a.5.5 0 0 0 .929-.03L8.305 10h4.39l1.335 3.67a.5.5 0 0 0 .94-.34zm-.47 1.633L12.332 9H8.669zM4 8.8l.917 2.2H3.083z"></svg:path>`,
})
export class FluentTextFontSize16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
