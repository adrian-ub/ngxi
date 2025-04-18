import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAiLabelIcon],svg[carbon-ai-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21v-2h1v-7h-1v-2h4v2h-1v7h1v2zm-3.5 0h2L14 10h-3L7.503 21h2l.601-2h4.778zm-4.794-4l1.628-5.411l.256-.003L14.264 17z"></svg:path><svg:path fill="currentColor" d="M32 32H0V0h32zM2 30h28V2H2z"></svg:path>`,
})
export class CarbonAiLabelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
