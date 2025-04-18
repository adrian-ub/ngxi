import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconReportIcon],svg[codicon-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 1h13l.5.5v10l-.5.5H7.707l-2.853 2.854L4 14.5V12H1.5l-.5-.5v-10zm6 10H14V2H2v9h2.5l.5.5v1.793l2.146-2.147zm0-8h1v5h-1zm0 7h1V9h-1z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconReportIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
