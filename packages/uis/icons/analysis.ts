import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisAnalysisIcon],svg[uis-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 7.3c-.4-.4-1-.4-1.4 0L14 13.6L9.7 9.3C9.5 9.1 9.3 9 9 9s-.5.1-.7.3l-6 6c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3L9 11.4l4.3 4.3c.1.1.2.2.3.2c.1.1.3.1.4.1c.2 0 .5-.1.6-.3h.1l7-7c.4-.4.4-1 0-1.4"></svg:path>`,
})
export class UisAnalysisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
