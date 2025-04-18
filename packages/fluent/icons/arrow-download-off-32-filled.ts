import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownloadOff32FilledIcon],svg[fluent-arrow-download-off-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26.877 28.291l1.416 1.416a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414L14.75 16.165v3.567l-4.616-4.616a1.25 1.25 0 0 0-1.768 1.768l6.75 6.75a1.25 1.25 0 0 0 1.768 0l2.668-2.668l5.534 5.534H6.25a1.25 1.25 0 1 0 0 2.5h19.5c.497 0 .926-.29 1.127-.709m-9.093-9.093l-.534.534v-1.067zm4.243-.706l-1.768-1.768l1.607-1.608a1.25 1.25 0 0 1 1.768 1.768zM14.75 4.25v6.966l2.5 2.5V4.25a1.25 1.25 0 1 0-2.5 0"></svg:path>`,
})
export class FluentArrowDownloadOff32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
