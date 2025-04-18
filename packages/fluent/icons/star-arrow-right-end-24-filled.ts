import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarArrowRightEnd24FilledIcon],svg[fluent-star-arrow-right-end-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778l5.273.766c1.107.16 1.549 1.522.748 2.303l-.906.882a6.5 6.5 0 0 0-9.442 7.43l-3.957 2.081c-.99.52-2.148-.32-1.96-1.423l.901-5.251l-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88zM22.998 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-8.5-.5a.5.5 0 0 0 0 1h4.793l-1.646 1.646a.5.5 0 1 0 .707.707l2.5-2.5a.5.5 0 0 0 0-.707l-2.5-2.5a.5.5 0 1 0-.707.707L19.29 17z"></svg:path>`,
})
export class FluentStarArrowRightEnd24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
