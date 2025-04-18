import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileChartCheckOutlineIcon],svg[mdi-file-chart-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zM6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.8c-.4-.6-.6-1.3-.7-2H6V4h7v5h5v4.1c.3-.1.7-.1 1-.1s.7 0 1 .1V8l-6-6zm5 9v8h2v-8zm-4 2v6h2v-6z"></svg:path>`,
})
export class MdiFileChartCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
