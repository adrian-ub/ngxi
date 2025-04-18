import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileChartCheckIcon],svg[mdi-file-chart-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zM6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.8c-.5-.9-.8-1.9-.8-3v1h-2v-8h2v7c0-3.3 2.7-6 6-6c.3 0 .7 0 1 .1V8l-6-6zm7 1.5L18.5 9H13zM7 14h2v6H7z"></svg:path>`,
})
export class MdiFileChartCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
