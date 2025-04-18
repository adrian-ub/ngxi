import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAiIcon],svg[carbon-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h3v10h-3v2h8v-2h-3V11h3V9h-8zm-4-2H9c-1.103 0-2 .897-2 2v12h2v-5h4v5h2V11c0-1.103-.897-2-2-2m-4 7v-5h4v5z"></svg:path>`,
})
export class CarbonAiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
