import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenFlowIcon],svg[token-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.593 6.937h-4.05c-.872 0-1.575.884-1.575 1.733v.517h-4.5V8.67c0-3.128 2.61-5.67 5.833-5.67h4.292zm-10.125 8.157c0 .883-.523 1.609-1.407 1.609c-1.125 0-1.608-.726-1.608-1.61c0-.882.725-1.406 1.608-1.406h1.407zm4.5-1.407v1.148c0 3.262-2.644 6.165-5.907 6.165a5.912 5.912 0 0 1 0-11.813h1.407v4.5zm0 0v-4.5h4.5v4.5z" clip-rule="evenodd"></svg:path>`,
})
export class TokenFlowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
