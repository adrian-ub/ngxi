import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDirections24FilledIcon],svg[fluent-directions-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.952 14.299a3.25 3.25 0 0 1 0-4.597l6.75-6.75a3.25 3.25 0 0 1 4.597 0l6.75 6.75a3.25 3.25 0 0 1 0 4.597l-6.75 6.75a3.25 3.25 0 0 1-4.597 0zm10.828-7.08a.75.75 0 1 0-1.06 1.061l.72.72h-1.69A2.75 2.75 0 0 0 9 11.75v3.5a.75.75 0 0 0 1.5 0v-3.5c0-.69.56-1.25 1.25-1.25h1.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentDirections24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
