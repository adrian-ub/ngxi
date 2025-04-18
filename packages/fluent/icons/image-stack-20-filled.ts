import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageStack20FilledIcon],svg[fluent-image-stack-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v3h3.293l2.47-2.47a1.75 1.75 0 0 1 2.474 0L13.707 9H17V6a3 3 0 0 0-3-3zm11 7v4a3 3 0 0 1-2.361 2.932l-3.402-3.402a1.75 1.75 0 0 0-2.474 0L5.36 16.932A3 3 0 0 1 3 14v-4zM6.707 17h6.586l-2.763-2.763a.75.75 0 0 0-1.06 0zm1-8h4.586L10.53 7.237a.75.75 0 0 0-1.06 0zM15.5 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentImageStack20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
