import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFontInfo20FilledIcon],svg[fluent-text-font-info-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.193 3.754a.75.75 0 0 0-1.41-.02L2.8 14.234a.75.75 0 1 0 1.402.532l.86-2.266h3.03A5.5 5.5 0 0 1 8.6 11H5.63l1.824-4.805l1.476 4.244a5.5 5.5 0 0 1 1.154-1.25zm5.307 7.121a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25m0 5.125a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5m0-7a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m0 8a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7"></svg:path>`,
})
export class FluentTextFontInfo20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
