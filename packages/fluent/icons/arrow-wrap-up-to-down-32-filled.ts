import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowWrapUpToDown32FilledIcon],svg[fluent-arrow-wrap-up-to-down-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3c-.69 0-1.25.56-1.25 1.25v19a5.75 5.75 0 0 0 11.5 0V8.75a3.25 3.25 0 0 1 6.5 0v16.982l-.866-.866a1.25 1.25 0 0 0-1.768 1.768l3 3a1.25 1.25 0 0 0 1.768 0l3-3a1.25 1.25 0 0 0-1.768-1.768l-.866.866V8.75a5.75 5.75 0 0 0-11.5 0v14.5a3.25 3.25 0 0 1-6.5 0v-19C8 3.56 7.44 3 6.75 3"></svg:path>`,
})
export class FluentArrowWrapUpToDown32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
