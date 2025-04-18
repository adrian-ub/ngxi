import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feActivityIcon],svg[fe-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 19a1 1 0 0 1-2 0V8a1 1 0 1 1 2 0zm-4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0zm6 0v-9a1 1 0 0 1 2 0v9a1 1 0 0 1-2 0m4-14a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0z"></svg:path>`,
})
export class FeActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
