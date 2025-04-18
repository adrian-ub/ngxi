import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineHeightIcon],svg[lineicons-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.754 4a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 0 1.5h-6.996a.75.75 0 0 1-.75-.75m7.746 9.917h-6.996a.75.75 0 0 0 0 1.5H20.5a.75.75 0 0 0 0-1.5m-6.996 5.333a.75.75 0 0 0 0 1.5H20.5a.75.75 0 0 0 0-1.5zm6.996-9.167h-6.996a.75.75 0 0 1 0-1.5H20.5a.75.75 0 0 1 0 1.5M9.974 16.47l-1.722 1.72V5.81l1.722 1.72a.75.75 0 0 0 1.06-1.06l-3.002-3a.75.75 0 0 0-1.06 0l-3.002 3a.75.75 0 0 0 1.06 1.06l1.722-1.72v12.38L5.03 16.47a.75.75 0 0 0-1.06 1.06l3.002 3a.75.75 0 0 0 1.06 0l3.002-3a.75.75 0 0 0-1.06-1.06"></svg:path>`,
})
export class LineiconsLineHeightIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
