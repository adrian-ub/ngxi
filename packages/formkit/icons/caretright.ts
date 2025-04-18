import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitCaretrightIcon],svg[formkit-caretright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.62 7.18L2.79 3.03c-.7-.6-1.79-.1-1.79.82v8.29c0 .93 1.09 1.42 1.79.82l4.83-4.14c.5-.43.5-1.21 0-1.64"></svg:path>`,
})
export class FormkitCaretrightIcon {
  readonly viewBox = input("0 0 9 16")
  readonly width = input("0.57em")
  readonly height = input("1em")
}
