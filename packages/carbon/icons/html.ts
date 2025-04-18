import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHtmlIcon],svg[carbon-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 19v-8h-2v10h6v-2zm-4-8h-2l-1.5 4l-1.5-4h-2v10h2v-7l1.5 4l1.5-4v7h2zM9 13h2v8h2v-8h2v-2H9zm-4-2v4H2v-4H0v10h2v-4h3v4h2V11z"></svg:path>`,
})
export class CarbonHtmlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
