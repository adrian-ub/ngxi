import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineDashedIcon],svg[lineicons-line-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 12a.75.75 0 0 1 .75-.75h4.167a.75.75 0 0 1 0 1.5H3.25A.75.75 0 0 1 2.5 12m7.167 0a.75.75 0 0 1 .75-.75h4.167a.75.75 0 0 1 0 1.5h-4.167a.75.75 0 0 1-.75-.75m7.917-.75a.75.75 0 0 0 0 1.5h4.166a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class LineiconsLineDashedIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
