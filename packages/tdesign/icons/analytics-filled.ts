import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAnalyticsFilledIcon],svg[tdesign-analytics-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zm-4 9V8h-2v3zm-5 2v-3h-2v3zm-5 5v-6H6v6zm10 0v-5h-2v5zm-5 0v-3h-2v3z"></svg:path>`,
})
export class TdesignAnalyticsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
