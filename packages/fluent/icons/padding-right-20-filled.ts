import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaddingRight20FilledIcon],svg[fluent-padding-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 3.75a.75.75 0 0 1 .75.75V15A.75.75 0 0 1 2 15V4.5a.75.75 0 0 1 .75-.75m14.5 0a.75.75 0 0 1 .75.75v1.313a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75m0 3.938a.75.75 0 0 1 .75.75v2.624a.75.75 0 0 1-1.5 0V8.439a.75.75 0 0 1 .75-.75m0 5.25a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0v-1.312a.75.75 0 0 1 .75-.75m-1.97-2.658a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 1 0-1.06 1.06L12.94 9H5.75a.75.75 0 0 0 0 1.5h7.19l-2.97 2.97a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class FluentPaddingRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
